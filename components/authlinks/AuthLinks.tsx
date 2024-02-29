import Link from 'next/link'
import React from 'react'
import styles from './AuthLinks.module.css'
function AuthLinks() {
  const status : string = "notauthenticated"
  return <>
  {status==="notauthenticated" ?(
  <Link href='/login'  className={styles.link}>Login</Link>):
  (
    <>
        <Link href='/write' className={styles.link}>Write</Link>
        <span  className={styles.link}>Logout</span>
    </>)}
  </>
};

export default AuthLinks
