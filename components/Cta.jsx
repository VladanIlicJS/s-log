import Image from "next/image"
import React from "react"
import hand from "../public/assets/hand.png"
const Cta = () => {
  return (
    <>
      <div id="Contact" className="lg:relative lg:block hidden mr-20 h-[190px] bg-[#a1a5ff] py-16 z-50">
        <div className=" flex justify-between 2xl:pl-40 pl-9 pr-20">
          <div className="text-white">
            <h1 className="text-[34px]">Ready for a risk-free trail?</h1>
            <p className="text-white text-[18px]">Try for free, or book a free demo. Make route planning easier</p>
          </div>

          <button className="text-[21px] px-12 bg-white rounded-md">Get Started Today</button>
        </div>

        <span className="absolute top-[60%] right-6 translate-y-[-60%] pl-2">
          <Image src={hand} alt="/" width="45px" height="25px" />
        </span>
      </div>

      <div className="lg:hidden flex flex-col bg-[#a1a5ff] text-[22px] z-50 py-8 text-center items-center px-9">
        <div className=" flex flex-col justify-between 2xl:pl-40 my-4">
          <div className="text-white">
            <h1 className="text-[22px]">Ready for a risk-free trail?</h1>
            <p className="text-white text-[12px]">Try for free, or book a free demo. Make route planning easier</p>
          </div>

        </div>
            <div className="-mr-6">
                <button className="text-[12px] my-4 px-8 py-3 bg-white rounded-md">Get Started Today</button>
                <span className="pl-2 pt-8">
                    <Image src={hand} alt="/" width="45px" height="25px" />
                </span>
            </div>

      </div>
    </>
  )
}

export default Cta
