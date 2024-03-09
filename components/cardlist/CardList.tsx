import React from "react";
import styles from "./navbar.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../Card/Card";
function CardList() {
  return (
    <div className={`container py-10`}>
      <h1 className={`text-4xl font-bold`}>Posts</h1>
      <div className="flex items-start flex-col gap-1">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
}

export default CardList;
