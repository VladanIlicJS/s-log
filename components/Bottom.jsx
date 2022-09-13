import Link from 'next/link'
import React from 'react'
import Cta from "./Cta"
const Bottom = () => {
  return (
    
    <div className='w-full bg-[#032e4c] relative'>

        <div className='2xl:px-40 flex justify-between py-16 pt-[150px] -mt-[95px]'>
            <div className='grid grid-cols-3 gap-x-28 text-white mt-10 '>
                <div>
                    <h1 className='text-[16px] font-semibold pb-12'>Platform</h1>
                    <ul>
                        <li className='pb-5 opacity-50'>
                            <Link href="">How it Works</Link>
                        </li>
                        <li className='pb-5 opacity-50'>
                            <Link href="">Features</Link>
                        </li>
                        <li className='pb-5 opacity-50'>
                            <Link href="">For HR</Link>
                        </li>
                        <li className='pb-5 opacity-50'>
                            <Link href="">For Executives</Link>
                        </li>
                        <li className='pb-5 opacity-50'>
                            <Link href="">For Managers</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h1 className='text-[16px] font-semibold pb-12'>Solutions</h1>
                    <ul>
                        <li className='pb-5 opacity-50'>
                            <Link href="">Attract & retain talent</Link>
                        </li>
                        <li className='pb-5 opacity-50'>
                            <Link href="">Deversity & inclusion</Link>
                        </li>
                        <li className='pb-5 opacity-50'>
                            <Link href="">Flexible & remote</Link>
                        </li>
                        <li className='pb-5 opacity-50'>
                            <Link href="">Work & role design</Link>
                        </li>
                        <li className='pb-5 opacity-50'>
                            <Link href="">Management tools</Link>
                        </li>
                    </ul>
                </div>

                <div className=''>
                    <h1 className='text-[16px] font-semibold pb-12'>Resources</h1>
                    <ul>
                        <li className='pb-5 opacity-50'>
                            <Link href="">Working playbook</Link>
                        </li>
                        <li className='pb-5 opacity-50'>
                            <Link href="">Blog</Link>
                        </li>
                        <li className='pb-5 opacity-50'>
                            <Link href="">Help & Support</Link>
                        </li>
                        <li className='pb-5 opacity-50'>
                            <Link href="">Contact</Link>
                        </li>
                        <li className='pb-5 opacity-50'>
                            <Link href="">Careers</Link>
                        </li>
                    </ul>
                </div>
                
                

            </div>

            <div className='border-r-2 opacity-30 '></div>

            <div className='mt-10'>
                    <h1 className='text-[16px] font-semibold pb-12 text-white'>Get in Touch</h1>
                    <p className='text-white opacity-50'>Feel free to get in touch with us via email</p>
                    <p className='text-white py-5 text-[18px] font-medium italic'>solvelog@gmail.com</p>
                </div>

        </div>

    </div>
  )
}

export default Bottom