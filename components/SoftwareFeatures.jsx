import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <div className=' pt-[75px] w-full bg-[#2b2d80]'>
        <div className='text-center'>

            <p className='text-[#a1a5ff] mb-3'>Software features</p>
            <h2 className='text-2xl font-[500]  text-[#ffffff]'>All the features you will ever need</h2>
        </div>
        <div className='text-white py-20 px-9 2xl:px-40 grid lg:grid-cols-3 lg:grid-rows-2 gap-y-16 grid-cols-1'>
            <div className='grid grid-cols-[1fr,6fr]'>
                <div className='pt-3 text-right '>
                    <span className='text-3xl  rounded-full py-[3px] px-[10px] w-full h-full self-stretch border-solid border-[3.5px] font-medium text-[#00a99d] border-[#00a99d]'>01</span>
                </div>
                <div className='lg:px-7 pl-7 lg:pr-14'>
                    <h5 className=' leading-[30px] text-[18px] font-[600]'>CVRP Solution</h5>
                    <p className=' text-white leading-7 text-[15px]'>Solution for all Capacitated Vehicle Routing Problems. </p>
                </div>
            </div>
            <div className='grid grid-cols-[1fr,6fr]'>
                <div className='pt-3 text-right'>
                    <span className='text-3xl rounded-full py-[3px] px-[6px] w-full h-full self-stretch border-solid border-[3.5px] font-medium text-[#7860dc] border-[#7860dc] '>02</span>
                </div>
                <div className='lg:px-7 pl-7 lg:pr-14'>
                    <h5 className=' leading-[30px] text-[18px] font-[600]'>VRPMT Solution</h5>
                    <p className=' text-white leading-7 text-[15px]'>Vehicle Routing Problem with Multiple Trips solved in a few clicks. </p>
                </div>
            </div>
            <div className='grid grid-cols-[1fr,6fr]'>
                <div className='pt-3 text-right'>
                    <span className='text-3xl rounded-full py-[3px] px-[6px] w-full h-full self-stretch border-solid border-[3.5px] font-medium text-[#ff5e5e] border-[#ff5e5e]'>03</span>
                </div>
                <div className='lg:px-7 pl-7 lg:pr-14'>
                    <h5 className=' leading-[30px] text-[18px] font-[600]'>MDVRP Solution</h5>
                    <p className='text-white leading-7 text-[15px]'>Multi-Depot Vehicle Routing Problem isn&apos;t a problem anymore. </p>
                </div>
            </div>


            <div className='grid grid-cols-[1fr,6fr]'>
                <div className='pt-3 text-right'>
                    <span className='text-3xl  rounded-full py-[3px] px-[6px] w-full h-full self-stretch border-solid border-[3.5px] font-medium text-[#ff5e5e] border-[#ff5e5e]'>04</span>
                </div>
                <div className='lg:px-7 pl-7 lg:pr-14'>
                    <h5 className=' leading-[30px] text-[18px] font-[600]'>Reduced Carbon Footprint</h5>
                    <p className=' text-white leading-7 text-[15px]'>Reducing fuel consumption not only lowers the cost, but also helps preserve the environment. </p>
                </div>
            </div>
            <div className='grid grid-cols-[1fr,6fr]'>
                <div className='pt-3 text-right'>
                    <span className='text-3xl  rounded-full py-[3px] px-[6px] w-full h-full self-stretch border-solid border-[3.5px] font-medium text-[#ffa42f] border-[#ffa42f]'>05</span>
                </div>
                <div className='lg:px-7 pl-7 lg:pr-14'>
                    <h5 className=' leading-[30px] text-[18px] font-[600]'>Flexibility</h5>
                    <p className=' text-white leading-7 text-[15px]'>The software is dynamic and can adapt to meet any criteria change in real time. </p>
                </div>
            </div>
            <div className='grid grid-cols-[1fr,6fr]'>
                <div className='pt-3 text-right'>
                    <span className='text-3xl  rounded-full py-[3px] px-[6px] w-full h-full self-stretch border-solid border-[3.5px] font-medium text-[#6ab04c] border-[#6ab04c]'>06</span>
                </div>
                <div className='lg:px-7 pl-7 lg:pr-14'>
                    <h5 className=' leading-[30px] text-[18px] font-[600]'>24/7 Support</h5>
                    <p className='text-white leading-7 text-[15px]'>Our tech support is always there for you, should you need them. </p>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Features