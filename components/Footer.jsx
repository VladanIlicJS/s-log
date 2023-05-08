import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../public/assets/logo.jpg'
const Footer = () => {
  return (
    <div className='flex justify-between lg:flex-row flex-col items-center 2xl:px-40 py-5 px-9'>
        <Link href="/">
            <Image
              className="cursor-pointer min-h-[29px]"
              src={Logo}
              alt="/"
              width="118px"
              height="29px"
            />
          </Link>
          <p className='opacity-25 lg:pt-0 pt-3'>&copy;2023@SolveLogistics. All Rights Reserved</p>
    </div>
  )
}

export default Footer