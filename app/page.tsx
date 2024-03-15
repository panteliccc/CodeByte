import CardList from "@/components/cardlist/CardList";
import CategoryList from "@/components/categorylist/CategoryList";
import Featured from "@/components/featured/Featured";

import Image from "next/image";

interface SearchParams {
  page: string;
  cat:string
}
export default function Home({ searchParams }: { searchParams: SearchParams }) {
  const page = searchParams.page || "1";
  const cat = searchParams.cat || ""
  return (
    <div className={`container`}>
      <Featured />
      <CategoryList />
      <div className="">
        <CardList page={page} cat={cat}/>
      </div>
    </div>
  );
}
