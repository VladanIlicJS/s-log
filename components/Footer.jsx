import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../public/assets/logo.jpg'
const Footer = () => {
  return (
    <div className='lg:flex hidden justify-between items-center 2xl:px-40 py-5 px-9'>
        <Link href="/">
            <Image
              className="cursor-pointer min-h-[29px]"
              src={Logo}
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