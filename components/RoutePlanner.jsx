import React from "react"
import { AiOutlinePlus } from "react-icons/ai"
import CollapsibleItems from "./Dropdowns"

import Image from "next/image"
import planner from "../public/assets/planner.png"
const RoutePlanner = () => {
  return (
    <div id="Products" className="w-full lg:pt-20 pt-10 max-h-[150%]">
      <div className="flex w-full">
        <div className="lg:flex hidden w-3/5 items-end pr-10">
          <Image src={planner} className=""/>
        </div>
        <div className=" lg:w-2/5 w-full items-start grid lg:grid-cols-1">
          <div className="py-3 2xl:px-3 2xl:pr-40 px-9 lg:text-start text-center w-full">
            <h5 className="text-[#a1a5ff] text-[16px]">Smart Route Planner</h5>
            <h1 className="text-[#2b2d80] lg:text-3xl text-2xl leading-[40px] pt-[32px] font-[500] ">
              <span className="text-[#a1a5ff] ">SLog</span> makes route planning easier, faster and
              efficient
            </h1>
            <p className="leading-7 pt-[12px] lg:text-[16px] text-[12px]">
              Our team will set up the software to optimize
            </p>
            <p className="leading-7 lg:text-[16px] text-[12px]">
              for your unique business structure and goals.
            </p>
            <div className="">
              <CollapsibleItems />
            </div>
          </div>
          <div className="w-full lg:hidden">
            <Image src={planner} sizes="(max-width: 768px) 100vw" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoutePlanner
