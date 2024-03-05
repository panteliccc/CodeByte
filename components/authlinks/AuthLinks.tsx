import Link from 'next/link'
import React from 'react'
import styles from './AuthLinks.module.css'
function AuthLinks() {
  const status : string = "notauthenticated"
  return <>
  {status==="authenticated" ?(
  <Link href='/login'  className={styles.link}>Login</Link>):
  (
    <div className={`flex gap-5`}>
        <Link href='/write' className={styles.link}>Write</Link>
        <span  className={styles.link}>Logout</span>
    </div>)}
  </>
};

export default AuthLinks
