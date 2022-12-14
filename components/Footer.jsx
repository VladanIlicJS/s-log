import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between items-center 2xl:px-40 py-5'>
        <Link href="/">
            <Image
              className="cursor-pointer min-h-[29px]"
              src="/../public/assets/logo.png"
              alt="/"
              width="118px"
              height="29px"
            />
          </Link>
          <p className='opacity-25'>&copy;2022@SolveLogistics. All Rights Reserved</p>
    </div>
  )
}

export default Footer