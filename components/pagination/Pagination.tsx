"use client"
import { useRouter } from "next/navigation";
import React from "react";
interface Props {
  page: string;
  cat:string
  hasPrev: boolean;
  hasNext: boolean;
}

function Pagination(props:Props) {
  const router = useRouter();
  
  return (
    <div className={`container flex justify-center gap-4`}>
      <button
        className={`bg-text text-white p-5 rounded-md w-36 text-center cursor-pointer disabled:opacity-65 disabled:cursor-auto z-0`}
        disabled={!props.hasPrev}
        onClick={()=>router.push(`?cat=${props.cat || ""}&page=${parseInt(props.page)-1}`)}
      >
        Previous
      </button>
      <button
        className={`bg-text text-white p-5 rounded-md w-36 text-center cursor-pointer disabled:opacity-50 disabled:cursor-auto`}
        disabled={!props.hasNext}
        onClick={()=>router.push(`?cat=${props.cat || ""}&page=${parseInt(props.page)+1}`)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
