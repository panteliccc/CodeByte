"use client";
import React, { useEffect } from "react";
import styles from "./style.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
function Login() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  return (
    <div
      className={`container flex flex-col justify-center items-center gap-10 ${styles.login} `}
    >
      <h1 className={`text-3xl font-bold `}>Sign in to your profile</h1>
      <div
        className={` bg-text text-white p-5 rounded-md w-72 text-center cursor-pointer text-xl flex gap-4 justify-center`}
        onClick={() => signIn("google")}
      >
        <Image src="/google.svg" width={24} height={24} alt="google icon"/>
        Sign in wtih Google
      </div>
    </div>
  );
}

export default Login;
