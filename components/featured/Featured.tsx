import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

interface Post {
  _id: string;
  createdAt: Date;
  slug: string;
  title: string;
  desc: string;
  img: string;
  views: number;
  catSlug: string;
  userEmail: string;

}


interface Data {
  post: Post;
}

const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/featured`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    console.error(
      `Failed to fetch data. Status: ${res.status}, Status Text: ${res.statusText}`
    );
    throw new Error("Failed!");
  }

  return res.json();
};
async function Featured() {
  const data: Data = await getData();
  const desc = {
    __html: data.post ? `${data?.post.desc.toString().slice(0, 150)}...` : "",
  };
  return (
    <div
      className={`container py-5 flex flex-col lg:flex-row mt-10 gap-5 lg:gap-10 items-start`}
    >
      {data?.post.img && (
        <Image
          src={data?.post.img}
          alt="featured image"
          width={800}
          height={400}
          className={`w-full lg:w-1/2  rounded`}
        />
      )}
      <div className="flex flex-col justify-between gap-16">
        <div className={`flex justify-between flex-col gap-0`}>
          <h1
            className={`text-3xl gap-5 md:gap-0 md:text-5xl font-bold py-5 md:py-0`}
          >
            {data?.post.title}
          </h1>
          <div className={`text-xl pt-5`} dangerouslySetInnerHTML={desc} />
          <Link
            className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-text text-background hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6 self-start"
            href={`/posts/${data?.post.slug}`}
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Featured;
