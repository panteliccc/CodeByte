"use client"
import React, { useState } from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import AuthLinks from '../authlinks/AuthLinks'

function NavBar() {
  const [open,setOpen] = useState(true)
  return (
    <div className={`container m-auto py-4 px-1 flex items-center justify-between`}>
      <div>
        <span className={` font-bold text-3xl`}>CodeByte</span>
      </div>
      <div className={styles.burger} onClick={()=>setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.links}>
          <ul className={`flex gap-5 `}>
            <li>
              <Link href={'/'} className={styles.link}>Home</Link>
            </li>
            <li>
              <Link href={'/'} className={styles.link}>Contact</Link>
            </li>
            <li>
              <Link href={'/'} className={styles.link}>About</Link>
            </li>
            <li>
              <AuthLinks/>  
            </li>
          </ul>
        </div>)
      }
    </div>
  )
}

export default NavBar
