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
  return (
    <div className={`container flex gap-10 items-center py-10 ${styles.card}`} key={props.id}>
      {
        <Image
          src={"/picture.jpg"}
          alt="Blog post picture"
          priority={true}
          width={500}
          height={400}
        />
      }
      <div className="flex flex-col gap-5">
        <span>
          <span className={`font-bold`}>{props.createdAt.toString().slice(0, 10)}</span>-
          <span>{props.catSlug}</span>
        </span>
        <h1 className={`text-4xl font-bold`}>{props.title}</h1>
        <p className={`text-xl`}>{props.desc}</p>
        <Link href={`/${props.slug}`} className={`bg-black text-white p-5 rounded-md w-32 text-center cursor-pointer`}>Read more</Link>
      </div>
    </div>
  );
}

export default Card;
