import Image from 'next/image'
import React from 'react'

const ShowCasePart = (props) => {
  return (
    <div className=''>
        <Image src={props.url} alt="/"/>
        <h2 className='text-3xl pt-5 text-[#2a2d80]'><span className='text-[#a1a5ff]'>How SLog</span>{props.headline}</h2>
        <p className='lg:w-[550px] md:w-[450px] w-[320px] pt-3 text-start'>{props.text}</p>
    </div>
  )
}

export default ShowCasePart