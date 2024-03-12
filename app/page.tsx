import CardList from "@/components/cardlist/CardList";
import CategoryList from "@/components/categorylist/CategoryList";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/menu/Menu";
import Image from "next/image";

interface SearchParams {
  page?: number;
}
export default function Home({ searchParams }: { searchParams: SearchParams }) {
  const page = searchParams.page || 1;
  return (
    <div className={`container`}>
      <Featured />
      <CategoryList />
      <div className="">
        <CardList page={page} />
      </div>
    </div>
  );
}
