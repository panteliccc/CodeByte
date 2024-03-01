"use client"
import React, { useEffect, useState } from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import AuthLinks from '../authlinks/AuthLinks'
import Image from 'next/image'

function NavBar() {
  const [width,setWidth] = useState<number>(window.innerWidth)

  const [open,setOpen] = useState<Boolean>(width > 760)
  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth > 760);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
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
              <Link 
              href={'/'} 
              className={styles.link}
              onClick={()=>setOpen(!open)}>
                Home
              </Link>
            </li>
            <li>
              <Link 
              href={'/'} 
              className={styles.link}
              onClick={()=>setOpen(!open)}>
                Contact
              </Link>
            </li>
            <li>
              <Link 
              href={'/'} 
              className={styles.link}
              onClick={()=>setOpen(!open)}>                
                About
              </Link>
            </li>
            <li>
              <AuthLinks/>  
            </li>
            <li>
              <Image 
              src='close.svg' 
              width={40} 
              height={40} 
              alt='close menu btn' 
              className={styles.close} 
              onClick={()=>setOpen(!open)}/>
            </li>
          </ul>
        </div>)
      }
    </div>
  )
}

export default NavBar
