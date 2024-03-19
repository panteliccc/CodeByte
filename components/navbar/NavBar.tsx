"use client";
import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import AuthLinks from "../authlinks/AuthLinks";
import Image from "next/image";

function NavBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const checkWidthAndUpdateOpen = () => {
      setOpen(window.innerWidth > 768);
    };
    checkWidthAndUpdateOpen();
    window.addEventListener("resize", checkWidthAndUpdateOpen);
    return () => window.removeEventListener("resize", checkWidthAndUpdateOpen);
  }, []);

  const [stickyClass, setStickyClass] = useState("");

  function stickNavbar() {
    let windowHeight = window.scrollY;
    if (windowHeight >500) {
      setStickyClass("fixed top-0 w-full shadow-md z-20 m-auto");
      
    } else {
      setStickyClass("");
    }
    
  }

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
  }, []);
  return (
    <div
      className={`container m-auto py-7 px-3 flex items-center justify-between bg-white ${stickyClass}`}
    >
      <div>
        <Link href="/" className={` font-bold text-4xl`}>
          codybyte.
        </Link>
      </div>
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.links}>
          <ul className={`flex gap-5 `}>
            <li>
              <Link href={"/"} className={styles.link}>
                Home
              </Link>
            </li>
            <li>
              <Link href={"/"} className={styles.link}>
                Contact
              </Link>
            </li>
            <li>
              <Link href={"/"} className={styles.link}>
                About
              </Link>
            </li>
            <li>
              <AuthLinks />
            </li>
            <li>
              <Image
                src="close.svg"
                width={40}
                height={40}
                alt="close menu btn"
                className={styles.close}
                onClick={() => setOpen(!open)}
              />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
