"use client"
import React from 'react'
import styles from './style.module.css'
import { signIn, useSession } from 'next-auth/react'
function Login() {
  const {data,status} = useSession()
  console.log(data,status);
  
  return (
    <div className={`container flex flex-col justify-center items-center gap-16 ${styles.login}`} >
      <div 
      className={`bg-black text-white p-5 rounded-md w-60 text-center cursor-pointer`}
      onClick={() => signIn("google")}>
        Sign in wtih Google
      </div>
      <div className={`bg-black text-white p-5 rounded-md w-60 text-center cursor-pointer`}>Sign in wtih GitHub</div>
      <div className={`bg-black text-white p-5 rounded-md w-60 text-center cursor-pointer`}>Sign in wtih Facebok</div>
    </div>
  )
}

export default Login
