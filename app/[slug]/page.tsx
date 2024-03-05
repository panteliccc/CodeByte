import React from 'react'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'
function SinglePage() {
  return (
    <div className={`container py-7 flex flex-col gap-4`}>
      <div className={`flex md:flex-row flex-col-reverse w-full`}>
        <div className={`flex justify-between flex-col gap-0`}>
            <h1 className={`text-2xl gap-5 md:gap-0 md:text-5xl font-bold`}>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
            <div className='flex'>
                <Image src={'/picture.jpg'} alt='Blog post picture ' width={50} height={50} className={` rounded-full mr-3`}/>
                <div className='flex flex-col gap-1'>
                    <span>
                        <span className={`font-bold`}>5.3.2024</span>
                        -
                        <span>Programing</span>
                    </span>
                    <span>Nikola Pantelic</span>
                </div>
            </div>
        </div>
        <Image src={'/picture.jpg'} alt='Blog post picture ' width={800} height={400} className={`w-full md:w-3/4`}/>
      </div>
      <p className={`text-xl`}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam mollitia porro blanditiis esse sunt officia! Neque atque veniam ratione voluptates, quos aperiam repellendus autem eaque id perspiciatis nulla saepe magnam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam mollitia porro blanditiis esse sunt officia! Neque atque veniam ratione voluptates, quos aperiam repellendus autem eaque id perspiciatis nulla saepe magnam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam mollitia porro blanditiis esse sunt officia! Neque atque veniam ratione voluptates, quos aperiam repellendus autem eaque id perspiciatis nulla saepe magnam?
      </p>
      <div>
        <Comments/>
      </div>
    </div>
  )
}

export default SinglePage   
