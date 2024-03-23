import Link from "next/link";
import React from "react";
import styles from "./AuthLinks.module.css";
import { signOut, useSession } from "next-auth/react";

function AuthLinks() {
  const { status } = useSession();
  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <div className={`flex flex-col gap-5 md:flex-row`}>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <Link href={"/myposts"} className={styles.link}>
            My Posts
          </Link>
          <button className={styles.link} onClick={() => signOut()}>
            Logout
          </button>
        </div>
      )}
    </>
  );
}

export default AuthLinks;
