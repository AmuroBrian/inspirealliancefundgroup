import React from 'react'
import Image from 'next/image'
import Link from 'next/link'    

export default function Header(){
  return (
    <div className='flex justify-between items-center p-4 bg-black'>
      <div className='flex items-center gap-2'>
        <Image src='/logo.jpg' alt='logo' width={100} height={100} />
      </div>
      <div className='flex items-center gap-2'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
      </div>
    </div>
  )
}
