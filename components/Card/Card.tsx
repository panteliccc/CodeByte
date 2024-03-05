import React from 'react'
import styles from'./card.module.css'
import Image from 'next/image'
function Card() {
  return (
    <div className={`container flex gap-10 items-center py-10 ${styles.card}`}>
      <Image src={'/picture.jpg'} alt='Blog post picture' width={500} height={400}/>
      <div className='flex flex-col gap-5'>
        <span>
            <span className={`font-bold`}>5.3.2024</span>
            -
            <span>Programing</span>
        </span>
        <h1 className={`text-4xl font-bold`}>Lorem ipsum</h1>
        <p className={`text-xl`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium perferendis debitis a necessitatibus sequi, distinctio architecto id qui quaerat unde culpa itaque. Doloribus adipisci vel veritatis esse unde quo voluptatum!</p>
        <div className={`bg-black text-white p-5 rounded-md w-32 text-center cursor-pointer`}>Read More</div>
      </div>
    </div>
  )
}

export default Card
