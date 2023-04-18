import React from "react";
import {AiOutlinePlus} from "react-icons/ai"
import CollapsibleItems from "./Dropdowns";
const RoutePlanner = () => {
  return (
    <div className="w-full pt-20">
      <div className=" relative bg-planner w-full h-[600px] bg-no-repeat bg-[length:55%_100%]">
        <div className="absolute grid grid-cols-[10fr,7fr]">
          <div></div>
          <div className="py-3 px-3 pr-40">
            <h5 className="text-[#a1a5ff] text-[16px]">Smart Route Planner</h5>
            <h1 className="text-[#2b2d80] text-3xl leading-[40px] pt-[32px] font-[500] ">
              <span className="text-[#a1a5ff]">SLog</span> makes route planning
              easier, faster and efficient
            </h1>
            <p className="leading-7 pt-[12px] pr-20">
              Our team will set up the software to optimize for your unique
              business structure and goals.
            </p>
            <div>
            <CollapsibleItems/>
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
        </div>
      </div>
    </div>
  );
};

export default RoutePlanner;
