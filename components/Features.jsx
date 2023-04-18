import Image from 'next/image'
import React from 'react'
import profile from "../public/assets/icon-person.png"
import money from '../public/assets/icon-money.png'
import growth from '../public/assets/icon-growth.png'
const Features = () => {
  return (
    <div className=' pt-[75px] w-full bg-[#fbfbff]'>
        <div className='text-center'>

            <p className='text-[#a1a5ff] mb-3'>Easy to use route planning solution</p>
            <h2 className='text-2xl font-[500]  text-[#2b2d80]'>Route planning and optimization for top results</h2>
        </div>
        <div className='py-20 px-2 2xl:px-40 grid grid-cols-3'>
            <div className='grid grid-cols-[1fr,4fr]'>
                <div>
                    <Image src={profile}  width={69} height={69} alt="/" />
                </div>
                <div className='px-7'>
                    <h5 className=' leading-[30px] text-[#2b2d80] text-[18px] font-[600]'>Efficient Fleet Use</h5>
                    <p className='text-[#343d48] leading-7 text-[15px]'>Maximize performance of your fleet based on vehicle capacity, profit, and time limitation. </p>
                </div>
            </div>
            <div className='grid grid-cols-[1fr,4fr]'>
                <div>
                    <Image  className='' src={money} width={69} height={69} alt="/" />
                </div>
                <div className='px-5'>
                    <h5 className=' leading-[30px] text-[#2b2d80] text-[18px] font-[600]'>Lower Cost</h5>
                    <p className='text-[#343d48] leading-7 text-[15px]'>Minimize costs by using your resources in the most optimal manner. </p>
                </div>
            </div>
            <div className='grid grid-cols-[1fr,4fr]'>
                <div>
                    <Image  className='' src={growth} width={69} height={69} alt="/" />
                </div>
                <div className='px-5'>
                    <h5 className=' leading-[30px] text-[#2b2d80] text-[18px] font-[600]'>Faster Growth</h5>
                    <p className='text-[#343d48] leading-7 text-[15px]'>Increase profit and grow your transportation business faster. </p>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Features