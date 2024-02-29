import CardList from "@/components/cardlist/CardList";
import CategoryList from "@/components/categorylist/CategoryList";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/menu/Menu";
import Image from "next/image";

export default function Home() {
  return (
    <div className={`container`}>
      <Featured/>
      <CategoryList/>
      <div className="">
        <CardList/>
        <Menu/>
      </div>
    </div>
  );
}
