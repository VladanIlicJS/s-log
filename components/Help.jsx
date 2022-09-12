import React from 'react'

const Help = () => {
  return (
    <div className='2xl:px-40 h-full'>
        <div className='grid grid-cols-2'>
          <div className='py-[100px]'>
            <h5 className='text-[#a1a5ff] text-[16px] '>How we help</h5>
            <h2 className='text-[#a1a5ff] text-4xl pt-[32px] font-[500]'>Al-driven route <br></br><span className='text-[#2b2d80]'>optimization</span></h2>
            <p className='text-[18px] font-[500] py-[10px]'>Leverage the power of the latest AI technology</p>
            <p className='pt-[10px] pr-[100px] leading-6'>SLog analyzes your real-time data and optimizes for the metrics which are most important to you.</p>
            <button className='text-[18px] bg-[#a1a5ff] text-white mt-10 pt-[12px] pb-[12px] px-12 rounded-md hover:text-[#02073E] font-[400] transition duration-300 ease-out w-[45%]'>Book a Demo</button>
          </div>
          <div className='flex justify-end'>
            <div className='bg-[#bf8787] w-[80%] h-[90%] shadow-2xl'>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Help