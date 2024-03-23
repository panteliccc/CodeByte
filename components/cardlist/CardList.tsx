import React, { Fragment } from "react";
import Pagination from "../pagination/Pagination";
import Card from "../Card/Card";
import { headers } from "next/headers";
import DeletePost from "../deletePost/DeletePost";

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
  myposts: string;
}

const getData = async (page: number, cat: string, myposts: string) => {
  const cookie = headers().get("cookie");
  const res = await fetch(
    myposts
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/myposts?page=1`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/?cat=${
          cat || ""
        }&page=${page}`,
    {
      method: "GET",
      headers: {
        Cookie: cookie || "",
      },
      cache: "no-store",
    }
  );

  return res.json();
};

async function CardList(params: Params) {
  const data: Data = await getData(
    parseInt(params.page),
    params.cat,
    params.myposts
  );

  const POST_PER_PAGE = 6;
  const hasPerv = POST_PER_PAGE * (parseInt(params.page) - 1) > 0;
  const hasNext =
    POST_PER_PAGE * (parseInt(params.page) - 1) + POST_PER_PAGE < data.count;
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold capitalize">
        {params.cat ? `${params.cat} posts` : "Posts"}
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-10 items-start py-8 w-full">
        {data.posts &&
          data.posts.map((item: Post) => (
            <Fragment key={item.id}>
              <div className="relative">
                {params.myposts === "true" ? (
                  <DeletePost id={item.id} />
                  
                ) : (
                  <></>
                )}
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
              </div>
            </Fragment>
          ))}
      </div>
      <Pagination
        page={params.page}
        cat={params.cat}
        hasPrev={hasPerv}
        hasNext={hasNext}
      />
    </div>
  );
}

export default CardList;
