'use client'
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic'; 
import React, { useEffect, useState } from 'react';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.bubble.css';


function Write() {
  const [value, setValue] = useState('');
  const { status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  return (
    <div className={`container flex flex-col gap-4 py-10`}>
    <input type="text" placeholder='Title' className={`w-full px-2 py-5 text-2xl border-black border-2`} />
    <div className={`border-black border-2 p-5 flex items-start justify-between w-full`}>
      <button className={`w-1/12`}>
          <Image src={'/icon-plus.svg'} width={32} height={32} alt='icon picture' className={`rounded-full border-black border-2`}/>
      </button>
      <ReactQuill theme={`bubble`} value={value} onChange={setValue} placeholder='Tell your story' className={`  min-h-96 w-11/12`}/>
    </div>

  </div>
  );
}

export default Write;
