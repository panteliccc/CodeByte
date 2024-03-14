import React from "react";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

interface Params {
  slug: string;
}
interface Data {
  id: string;
  createdAt: Date;
  slug: string;
  title: string;
  desc: string;
  img: string;
  views: number;
  catSlug: string;
  userEmail: string;
}
const getData = async (slug: string) => {
  const res = await fetch(`${process.env.BASE_URL}/api/posts/${slug}`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};
async function SinglePage({ params }: { params: Params }) {
  const { slug } = params;


  const data: Data = await getData(slug);

  return (
    <div className={`container py-7 flex flex-col gap-4`} key={data.id}>
      <div className={`flex md:flex-row flex-col-reverse w-full`}>
        <div className={`flex justify-between flex-col gap-0`}>
          <h1 className={`text-2xl gap-5 md:gap-0 md:text-5xl font-bold`}>
            {data.title}
          </h1>
          <div className="flex">
            <Image
              src={"/picture.jpg"}
              alt="Blog post picture "
              width={50}
              height={50}
              className={` rounded-full mr-3`}
            />
            <div className="flex flex-col gap-1">
              <span>
                <span className={`font-bold`}>{data.createdAt.toString().slice(0, 10)}</span>-
                <span>{data.catSlug}</span>
              </span>
              <span>Nikola Pantelic</span>
            </div>
          </div>
        </div>
        {data.img &&
        <Image
          src={data.img}
          alt="Blog post picture "
          width={800}
          height={400}
          className={`w-full md:w-3/4`}
        />}
      </div>
      <p className={`text-xl`}>{data.desc}</p>
      <div>
        <Comments />
      </div>
    </div>
  );
}

export default SinglePage;
