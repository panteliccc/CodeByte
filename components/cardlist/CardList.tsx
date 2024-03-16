import React from "react";
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

interface Data {
  posts: Post[];
  count: number;
}

interface Params {
  page: string;
  cat: string;
}

const getData = async (page: number, cat: string) => {
  const res = await fetch(
    `${process.env.BASE_URL}/api/posts/?cat=${cat || ""}&page=${page}}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

async function CardList(params: Params) {
  const data: Data = await getData(parseInt(params.page), params.cat);

  const POST_PER_PAGE = 6;
  const hasPerv = POST_PER_PAGE * (parseInt(params.page) - 1) > 0;
  const hasNext =
    POST_PER_PAGE * (parseInt(params.page) - 1) + POST_PER_PAGE < data.count;

  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold">Posts</h1>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-10 items-start py-8 w-full">
        {data.posts &&
          data.posts.map((item: Post) => (
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
      <Pagination page={params.page} cat={params.cat} hasPrev={hasPerv} hasNext={hasNext} />
    </div>
  );
}

export default CardList;
