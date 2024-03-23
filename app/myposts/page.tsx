import CardList from "@/components/cardlist/CardList";
import React from "react";

interface SearchParams {
  page?: string;
  cat: string;
}

function MyPosts({ searchParams }: { searchParams: SearchParams }) {
  const page = searchParams.page || "1";
  const cat = searchParams.cat || "";
  return (
    <div className={`container`}>
      <CardList page={page} myposts={"true"} cat="" />
    </div>
  );
}

export default MyPosts;
