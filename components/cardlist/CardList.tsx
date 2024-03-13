import React from "react";
import styles from "./navbar.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../Card/Card";
import { log } from "console";

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
interface Params {
  page: string;
}
const getData = async (page: number) => {
  const res = await fetch(`http://localhost:3000/api/posts/?page=${page}}`);

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

async function CardList(params: Params) {
  const data: Data = await getData(parseInt(params.page));

  const POST_PER_PAGE = 4;
  const hasPerv = POST_PER_PAGE * (parseInt(params.page) - 1) > 0;
  const hasNext = POST_PER_PAGE * (parseInt(params.page) - 1) + POST_PER_PAGE < data.count;

  
  return (
    <div className={`container py-10`}>
      <h1 className={`text-4xl font-bold`}>Posts</h1>
      <div className="flex items-start flex-col gap-1">
        {data.posts &&
          data.posts.map((item: any) => (
            <Card
              key={item.id}
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
      <Pagination page={params.page} hasPrev={hasPerv} hasNext={hasNext} />
    </div>
  );
}

export default CardList;
