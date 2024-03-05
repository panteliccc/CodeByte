import React from 'react'
import styles from './style.module.css'
function Login() {
  return (
    <div className={`container flex flex-col justify-center items-center gap-16 ${styles.login}`}>
      <div className={`bg-black text-white p-5 rounded-md w-60 text-center cursor-pointer`}>Sign in wtih Google</div>
      <div className={`bg-black text-white p-5 rounded-md w-60 text-center cursor-pointer`}>Sign in wtih GitGub</div>
      <div className={`bg-black text-white p-5 rounded-md w-60 text-center cursor-pointer`}>Sign in wtih Facebok</div>
    </div>
  )
}

export default Login
