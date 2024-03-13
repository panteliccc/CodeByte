"use client"
import { useRouter } from "next/navigation";
import React from "react";
interface Props {
  page: string;
  hasPrev: boolean;
  hasNext: boolean;
}

function Pagination(props:Props) {
  const router = useRouter();
  console.log(props.page);
  
  return (
    <div className={`container flex justify-between`}>
      <button
        className={`bg-black text-white p-5 rounded-md w-36 text-center cursor-pointer  disabled:opacity-50 disabled:cursor-auto`}
        disabled={!props.hasPrev}
        onClick={()=>router.push(`?page=${parseInt(props.page)-1}`)}
      >
        Previous
      </button>
      <button
        className={`bg-black text-white p-5 rounded-md w-36 text-center cursor-pointer disabled:opacity-50 disabled:cursor-auto`}
        disabled={!props.hasNext}
        onClick={()=>router.push(`?page=${parseInt(props.page)+1}`)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
