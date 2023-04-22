import Image from 'next/image'
import React from 'react'

const ShowCasePart = (props) => {
    console.log(props)
  return (
    <div>
        <Image src={props.url} alt="/"/>
        <h2 className='text-3xl pt-5 text-[#2a2d80]'><span className='text-[#a1a5ff]'>How SLog</span>{props.headline}</h2>
        <p className='pr-10 pt-3'>{props.text}</p>
    </div>
  )
}

export default ShowCasePart