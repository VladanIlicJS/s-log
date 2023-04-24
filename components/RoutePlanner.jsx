import React from "react"
import { AiOutlinePlus } from "react-icons/ai"
import CollapsibleItems from "./Dropdowns"
//import planner from "../public/assets/smart-route-planner.png"
import Image from "next/image"
import planner from "../public/assets/planner.png"
const RoutePlanner = () => {
  return (
    <div id="Products" className="w-full pt-20 pb-1 mb-1">
      <div className="lg:bg-planner md:h-[450px] lg:h-[450px] xl:h-[550] 2xl:h-[570px] bg-contain bg-no-repeat">
        <div className=" grid lg:grid-cols-[10fr,7fr] grid-cols-1">
          <div className="lg:block hidden"></div>
          <div className="py-3 2xl:px-3 2xl:pr-40 px-9 lg:text-start text-center w-full">
            <h5 className="text-[#a1a5ff] text-[16px]">Smart Route Planner</h5>
            <h1 className="text-[#2b2d80] lg:text-3xl text-2xl leading-[40px] pt-[32px] font-[500] ">
              <span className="text-[#a1a5ff] ">SLog</span> makes route planning easier, faster and efficient
            </h1>
            <p className="leading-7 pt-[12px] lg:text-[16px] text-[12px]">Our team will set up the software to optimize</p>
            <p className="leading-7 lg:text-[16px] text-[12px]">for your unique business structure and goals.</p>
            <div>
              <CollapsibleItems />
              {/* <div className="py-[20px] px-[30px] shadow-md rounded-md">
                <div className="flex items-center justify-between text-[#a1a5ff] py-[20px]">
                  <h3 className="text-[#a1a5ff] text-[15px]">Shorter routes</h3>
                  <AiOutlinePlus/>
                </div>
                <p className="text-[#343d48] pb-[25px] text-[12px]">SLog helps you eliminate redundant trips and get to all locations using the shortest route possible.</p>
              </div>
              <div>
                <h3 className="">Multiple drop-off locations</h3>
                <p></p>
              </div>
              <div>
                <h3 className="">Faster delivery</h3>
                <p></p>
              </div> */}
            </div>
          </div>
          <div className="w-full lg:hidden">
            <Image src={planner} fill sizes="(max-width: 768px) 100vw" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoutePlanner
