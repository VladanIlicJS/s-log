import React from 'react'
import ShowCasePart from './ShowCasePart'

const ShowCase = () => {
  return (
    <div className='2xl:px-40 flex justify-between gap-x-10 py-[100px]'>
        <ShowCasePart url="/../public/assets/r1.png" text={"61.5 km long route was reduced to just 33 km, which is a 46% reduction in distance."} headline={" optimizes for distance?"} />
        <ShowCasePart url={"/../public/assets/r2.png"} text={"2h 40m delivery time was reduced to just 1h 34m, which made the delivery faster by 41%."} headline={" optimizes for delivery time?"} />

    </div>
  )
}

export default ShowCase