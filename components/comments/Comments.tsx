"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import useSWR from "swr";
import Comment from "../comment/Comment";
interface Props {
  postSlug: string;
}
interface Data {
  _id: string;
  createdAt: Date;
  desc: string;
  userEmail: string;
  user: User;
  postSlug: string;
}
interface User {
  _id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image: string;
}
const fetcher = async (url: string) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }
  return data;
};

function Comments(props: Props) {
  const { status } = useSession();
  
  
  const {
    data,
    mutate,
    isLoading,
  }: { data: Data[]; mutate: any; isLoading: boolean } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/comments?postSlug=${props.postSlug}`,
    fetcher
  );


  const [comment, setComment] = useState("");
  const handleSubmit = async () => {

    await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ desc: comment, postSlug: props.postSlug }),
    });
    console.log(comment,props.postSlug);
    
    setComment("");
    mutate();
  };
  const onKeyDown = (e:any) => {
    if(e.key == 'Enter') handleSubmit();
  }
  return (
    <div className={`container md:w-3/4 w-full`}>
      <h1 className={`text-xl font-bold`}>Comments</h1>
      {status === "authenticated" ? (
        <div className={`flex w-full items-start py-5 gap-5`}>
          <textarea
            placeholder="Write a comment..."
            className={`w-full md:w-5/6 border-2 border-text md:min-h-32 rounded sm:w-3/4 p-1`}
            onChange={e => setComment(e.target.value)}
            value={comment}
            onKeyDown={
              (e) => {
                  onKeyDown(e);
              }
          }
          />
          <button
            className={`bg-text text-white p-5 rounded w-32 text-center cursor-pointer hidden md:flex justify-center`}
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className="flex flex-col gap-10 py-5">
        {isLoading
          ? "Loading..."
          : data?.map((item) => <Comment key={item._id} data={item} />)}
      </div>
    </div>
  );
}

export default Comments;
