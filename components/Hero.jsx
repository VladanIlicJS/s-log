import Image from 'next/image'
import React from 'react'
import { FaPaypal } from 'react-icons/fa';
import { FaDropbox } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <div className='relative bg-hero w-[100%] h-screen  bg-no-repeat bg-right bg-[length:58%_100%]'> 
            <div className='absolute pt-[60px] 2xl:px-40 h-full' >
                <div className='grid grid-cols-2 h-full'>
                    <div className='flex flex-col h-full justify-center'>
                        <h1 className='text-[54px] text-[#02073E] leading-[54px]'>Customizable Route</h1>
                        <h1 className='text-[54px]  text-[#a1a5ff]'>Planning Software</h1>
                        <p className='mt-2 text-[16px] text-[#3c3c46] font-[400] '>Optimize performance, cut down costs, and achieve your business goals with SLog, the first fully customizable route planning software.</p>
                        <button className=' text-[18px] bg-[#a1a5ff] text-white mt-10 pt-[12px] pb-[12px] rounded-md hover:text-[#02073E] font-[400] transition duration-300 ease-out w-[45%] '>Start Your 15-day Trail</button>
                        
                            <ul className='text-[16px] flex text-gray-300 mt-10 font-semibold'>
                                <li>Our Clients</li>
                                <li className='flex justify-center text-[20px] items-center ml-8 ]'><FaPaypal className='mx-2'/> Paypal</li>
                                <li className='ml-8 text-[20px]'>Google</li>
                                <li className='flex justify-center text-[20px] items-center ml-8'><FaDropbox className='mx-2'/>Dropbox</li>
                            </ul>
                        
                    </div>
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default Hero