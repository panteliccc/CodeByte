import React from 'react'
import styles from'./footer.module.css'
import Link from 'next/link'
function Footer() {
  return (
    <div className={`container flex py-5 justify-between ${styles.footer} `}>
      <div className={styles.logo}>
        <span className={` font-bold text-3xl`}>CodeByte</span>
      </div>
      <div className={`flex gap-10 ${styles.links}`}>
        <ul className={`flex flex-col gap-2`}>
          <li className={`font-bold text-xl`}>Links</li>
          <li>
            <Link 
            href='/'>
              Home
            </Link>
          </li>
          <li>
            <Link 
            href='/'>
              About
            </Link>
          </li>
          <li>
            <Link 
            href='/'>
              Contact
            </Link>
          </li>
          <li>
            <Link 
            href='/'>
              Blog
            </Link>
          </li>
        </ul>

        <ul className={`flex flex-col gap-2`}>
          <li className={`font-bold text-xl`}>Tags</li>
          <li>
            <Link 
            href='/'>
              Computer
            </Link>
          </li>
          <li>
            <Link 
            href='/'>
              Programming
            </Link>
          </li>
          <li>
            <Link 
            href='/'>
              News
            </Link>
          </li>
          <li>
            <Link 
            href='/'>
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
