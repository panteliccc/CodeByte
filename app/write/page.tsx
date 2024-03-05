'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.bubble.css"

function Write() {
    const [value,setValue] = useState("")
  return (
    <div className={`container flex flex-col gap-4`}>
      <input type="text" placeholder='Title' className={`w-full px-2 py-5 text-2xl border-black border-2`} />
      <div>
        <button>
            <Image src={'/icon-plus.svg'} width={32} height={32} alt='icon picture' className={`rounded-full border-black border-2`}/>
        </button>
      </div>
      <ReactQuill theme={`bubble`} value={value} onChange={setValue} placeholder='Tell your story' className={`text-2xl border-black bottom-2 min-h-48`}/>
    </div>
  )
}

export default Write
