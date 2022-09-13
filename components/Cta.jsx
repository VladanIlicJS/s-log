import Image from 'next/image'
import React from 'react'

const Cta = () => {
  return (
    <div className='relative mr-20 h-[190px] bg-[#a1a5ff] py-16'>
        <div className=' flex justify-between 2xl:pl-40 pr-20'>

            <div className='text-white'>
                <h1 className='text-[34px]'>Ready for a risk-free trail?</h1>
                <p className='text-white text-[18px]'>Try for free, or book a free demo. Make route planning easier</p>
            </div>
        
            <button className='text-[21px] px-12 bg-white rounded-md'>
                Get Started Today
            </button>
            
        </div>
        
                
        <span className='absolute top-[60%] right-6 translate-y-[-60%] pl-2'>
            <Image src="/../public/assets/hand.png" alt="/" width="45px" height="25px"/>  

        </span>


    </div>
  )
}

export default Cta