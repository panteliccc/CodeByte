import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
function Footer() {
  return (
    /*<div
      className={`container flex py-5 justify-between ${styles.footer} footer`}
    >
      <div className={styles.logo}>
        <span className={` font-bold text-3xl`}>CodeByte</span>
      </div>
      <div className={`flex gap-10 ${styles.links}`}>
        <ul className={`flex flex-col gap-2`}>
          <li className={`font-bold text-xl`}>Links</li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
        </ul>

        <ul className={`flex flex-col gap-2`}>
          <li className={`font-bold text-xl`}>Tags</li>
          <li>
            <Link href="/">Computer</Link>
          </li>
          <li>
            <Link href="/">Programming</Link>
          </li>
          <li>
            <Link href="/">News</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
        </ul>
      </div>
    </div>*/

    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="https://flowbite.com/" className="flex items-center font-bold text-4xl">
            codybyte. 
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Links
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-2">
                  <Link
                    href="/"
                    className="hover:underline"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/"
                    className="hover:underline"
                  >
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/"
                    className="hover:underline"
                  >
                    Contact
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/blog"
                    className="hover:underline"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Follow me
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-2">
                  <Link
                    href="https://github.com/panteliccc"
                    className="hover:underline "
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/panteliccnikola/"
                    className="hover:underline"
                  >
                    Linkedin
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Category
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-2">
                  <Link
                    href="https://flowbite.com/"
                    className="hover:underline"
                  >
                    Computer
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    News
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Programming
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center flex gap-1">
            Made with
            <Image src="/heart-solid.svg" alt="heart" width={20} height={20} />
            by{" "}
            <Link href="https://github.com/panteliccc" className={`underline`}>
              panteliccc
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
