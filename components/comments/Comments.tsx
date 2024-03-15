import Link from "next/link";
import React from "react";

function Comments() {
  const status = "authenticated";
  return (
    <div className={`container md:w-3/4 w-full`}>
      <h1 className={`text-xl font-bold`}>Comments</h1>
      {status === "authenticated" ? (
        <div className={`flex w-full items-start py-10 gap-5`}>
          <textarea
            placeholder="write a comment"
            className={` w-5/6 border-2 border-text min-h-32`}
          />
          <button
            className={`bg-text text-white p-5 rounded w-32 text-center cursor-pointer`}
          >
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
    </div>
  );
}

export default Comments;
