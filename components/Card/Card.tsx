import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

interface Props {
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

function Card(props: Props) {
  const desc = { __html: `${props.desc.toString().slice(0, 60)}...` };
  return (
    <div
      className={`relative flex flex-col sm:flex-row xl:flex-col bg-white rounded ${styles.card}`}
      key={props.id}
    >
      <div className={`order-1 sm:ml-6 xl:ml-0 p-5 ${styles.content}`}>
        <h1 className="mb-1 text-text font-semibold text-2xl">{props.title}</h1>
        <div className="prose prose-slate prose-sm text-slate-600 ">
          <div className={`text-xl`} dangerouslySetInnerHTML={desc} />
        </div>
        <Link
          className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-text text-background hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
          href={`/posts/${props.slug}`}
        >
          Read more
        </Link>
      </div>
      {props?.img && (
        <Image
          src={props?.img}
          alt=""
          className={`mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[18rem] sm:mb-0 xl:mb-6 xl:w-full ${styles.image}`}
          width={1216}
          height={100}
        />
      )}
    </div>
  );
}

export default Card;
