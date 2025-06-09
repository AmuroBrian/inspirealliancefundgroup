import React from 'react'   
import Image from 'next/image'
import Link from 'next/link'

export default function Footer(){
  return (
    <div className='flex justify-between items-center p-4 bg-black'>
      <div className='flex items-center gap-2 text-white'>
        Footer Content
      </div>
    </div>
  )
}
