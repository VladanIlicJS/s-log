import Image from 'next/image'
import React from 'react'
import { FaPaypal } from 'react-icons/fa';
import { FaDropbox } from 'react-icons/fa';
import hero from "../public/assets/hero.png"

const Hero = () => {
  return (
    <div id='Home' className='w-full mb-1 pb-1 relative '>
        <div className='lg:bg-hero 2xl:pr-[-36px] pb-1 bg-no-repeat bg-contain bg-right lg:h-screen'> 
            <div className=' pt-[60px] 2xl:px-40 h-full' >
                <div className='grid lg:grid-cols-2 grid-cols-1 lg:text-left text-center h-full 2xl:px-0 lg:px-9 '>
                    <div className='flex flex-col h-full justify-center lg:items-start items-center lg:px-0 px-9'>
                        <h1 className='lg:text-[54px] text-[30px] text-[#02073E] leading-[40px] lg:leading-[54px]'>Customizable Route</h1>
                        <h1 className='lg:text-[54px] text-[30px] font-[500]  text-[#a1a5ff]'>Planning Software</h1>
                        <p className='mt-2 lg:text-[16px] text-[12px] leading-5 text-[#3c3c46] font-[400] '>Optimize performance, cut down costs, and achieve your business goals with SLog, the first fully customizable route planning software.</p>
                        <button className=' lg:text-[18px] text-[12px] bg-[#a1a5ff] text-white mt-10 pt-[12px] pb-[12px] rounded-md  font-[400] hover:bg-[#8387f9] transition duration-300 ease-out lg:w-[45%] px-4'>Start Your 15-day Trial</button>
                       {/*  <li className='lg:hidden text-[16px] flex text-gray-300 mt-10 font-semibold'>Our Clients</li>
                            <ul className=' gap-3 text-[16px] flex justify-between text-gray-300 lg:mt-10 mt-5 font-semibold'>
                                <li className='hidden lg:flex'>Our Clients</li>
                                <li className='flex justify-center text-[20px] items-center  ]'><FaPaypal className='mx-2'/> Paypal</li>
                                <li className='text-[20px]'>Google</li>
                                <li className='flex justify-center text-[20px] items-center '><FaDropbox className='mx-2'/>Dropbox</li>
                            </ul> */}
                        
                    </div>
                    <div className='lg:hidden w-full h-screen'>
                        <Image src={hero}/>
                    </div>
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default Hero