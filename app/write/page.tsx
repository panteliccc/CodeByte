"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
const storage = getStorage(app);
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.bubble.css";
import { app } from "@/app/utils/firebase";

function Write() {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [media, setMedia] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const { status } = useSession();
  const router = useRouter();

  const handleSubmit = () => {
    const name = new Date().getTime() + (file?.name || "");
    const storageRef = ref(storage, "images/" + name);
    const uploadTask = file && uploadBytesResumable(storageRef, file);

    if (file) {
      uploadTask?.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          switch (error.code) {
            case "storage/unauthorized":
              break;
            case "storage/canceled":
              break;
            case "storage/unknown":
              break;
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            fetchData(downloadURL);
          });
        }
      );
    }else{
      setMedia("");
    }
  };

  const fetchData = async (downloadURL : string) => {
    await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: downloadURL,
        slug: title
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, "")
          .replace(/[\s_-]/g, "-")
          .replace(/^-+|-+$/g, ""),
        catSlug: "computer",
      }),
    });
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };
  return (
    <div className={`container flex flex-col gap-4 py-10`}>
      <input
        type="text"
        placeholder="Title"
        className={`w-full px-2 py-5 text-2xl border-text border-2 rounded`}
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <div
        className={`border-text border-2 p-5 flex items-start justify-between w-full bg-white rounded`}
      >
        <div>
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleFileChange}
            className={` hidden`}
          />
          <label htmlFor="image" className={`w-1/12`}>
            <Image
              src={"/icon-plus.svg"}
              width={32}
              height={32}
              alt="icon picture"
              className={`rounded-full border-black border-2 cursor-pointer`}
            />
          </label>
        </div>
        <ReactQuill
          theme={`bubble`}
          value={value}
          onChange={setValue}
          placeholder="Tell your story"
          className={`  min-h-96 w-11/12 bg-white`}
        />
      </div>
      <button
        className={`bg-text text-white p-5 rounded-md w-36 text-center cursor-pointer disabled:opacity-65 disabled:cursor-auto`}
        onClick={handleSubmit}
      >
        Publish
      </button>
    </div>
  );
}

export default Write;
