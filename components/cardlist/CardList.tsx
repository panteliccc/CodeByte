import React from "react";
import styles from "./navbar.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../Card/Card";

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
interface Params {
  page: number;
}
const getData = async (page: number) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}}`);

  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};

async function CardList(props: Params) {
  const data: Post[] = await getData(props.page);
  console.log(data);

  return (
    <div className={`container py-10`}>
      <h1 className={`text-4xl font-bold`}>Posts</h1>
      <div className="flex items-start flex-col gap-1">
        {data &&
          data?.map((item: any) => (
            <Card
              id={item.id}
              slug={item.slug}
              title={item.title}
              desc={item.desc}
              img={item.img}
              views={item.views}
              catSlug={item.catSlug}
              email={item.email}
              createdAt={item.createdAt}
            />
          ))}
      </div>
      <Pagination />
    </div>
  );
}

export default CardList;
