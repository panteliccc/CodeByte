"use client";
import Image from "next/image";
import React from "react";
import useSWR from "swr";
interface Props {
  id: string;
}
interface Post {
  id: string;
  slug: string;
  title: string;
  desc: string;
  img: string;
  views: string;
  catSlug: string;
  email: string;
  createdAt: string;
}

interface Data {
  posts: Post[];
  count: number;
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
const handleDelete = async (id: string) => {
  console.log(id);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/deletePost`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    }
  );

  if (!res.ok) {
    console.error(
      `Failed to delete post. Status: ${res.status}, Status Text: ${res.statusText}`
    );
    throw new Error("Failed!");
  }
};
function DeletePost(props: Props) {
  const {
    data,
    mutate,
    isLoading,
  }: { data: Data[]; mutate: any; isLoading: boolean } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/myposts`,
    fetcher
  );
  return (
    <button>
      <Image
        src={"/close.svg"}
        alt="delete post"
        className={`bg-text w-10 h-10 flex justify-center items-start absolute z-20 top-6 right-0 rounded-r`}
        onClick={() => handleDelete(props.id)}
        width={10}
        height={10}
      />
    </button>
  );
}

export default DeletePost;
