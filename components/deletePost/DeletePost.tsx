"use client"
import Image from "next/image";
import React from "react";
interface Props {
  id: string;
}

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
