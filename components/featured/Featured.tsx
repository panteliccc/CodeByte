import React from 'react'
import styles from './featured.module.css'
function Featured() {
  return (
    <div>
      <h1 className={` text-8xl font-bold py-12 ${styles.heading}`}>Unleashing the power of code, 
      one byte at a time</h1>
      <p className={`text-xl pb-8 ${styles.text}`}>
      Welcome to CodeByte, your hub for exploring the dynamic world of coding and technology. Dive into the latest languages, frameworks, and innovations, as we guide you through the byte-sized universe of programming mastery. Unleash the power of code with CodeByte - where every byte counts in shaping the digital future
      </p>
    </div>
  )
}

export default Featured
