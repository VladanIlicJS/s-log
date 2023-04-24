import React from 'react'
import show from '../public/assets/show.jpg'
import Image from 'next/image'
const Help = () => {
  return (
    <div className='2xl:px-40'>
        <div className='grid lg:grid-cols-2 grid-cols-1 lg:text-start text-center'>
          <div className='py-[100px] 2xl:px-0 xl-9 lg:px-9'>
            <h5 className='text-[#a1a5ff] text-[16px] '>How we help</h5>
            <h2 className='text-[#a1a5ff] text-4xl leading-[44px] pt-[32px] font-[500]'>Al-driven route <br></br><span className='text-[#2b2d80]'>optimization</span></h2>
            <p className='md:text-[18px] text-[12px] md:font-[500] font-[500] py-[10px]'>Leverage the power of the latest AI technology</p>
            <p className='pt-[10px] lg:pr-[100px] md:text-[16px] text-[12px] pr-0 leading-6'>SLog analyzes your real-time data and optimizes for the metrics which are most important to you.</p>
            <button className='lg:text-[18px] text-[12px] bg-[#a1a5ff] text-white mt-10 pt-[12px] pb-[12px] px-12 rounded-md hover:text-[#02073E] font-[400] transition duration-300 ease-out lg:w-[45%]'>Book a Demo</button>
          </div>
          <div className='lg:flex lg:justify-end justify-center hidden'>
            <div className='lg:w-[80%] lg:h-[80%] shadow-2xl'>
            <Image src={show}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Help