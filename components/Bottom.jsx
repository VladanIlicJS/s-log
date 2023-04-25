import Link from "next/link"
import React from "react"
import Cta from "./Cta"
import ContactForm from "./ContactForm"
const Bottom = () => {
  return (
    <div id="bottom" className="w-full bg-[#032e4c] relative">
      <div className="2xl:px-40 px-9 flex  gap-10 flex-col lg:flex-row lg:py-16 w-full lg:pt-[150px] lg:-mt-[95px] mt-0">
        {/* <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-28 text-white">
          <div className="lg:text-start text-center py-3">
            <h1 className="text-[16px] font-semibold lg:pb-12 py-4">Platform</h1>
            <ul>
              <li className="pb-5 opacity-50">
                <Link href="">How it Works</Link>
              </li>
              <li className="pb-5 opacity-50">
                <Link href="">Features</Link>
              </li>
              <li className="pb-5 opacity-50">
                <Link href="">For HR</Link>
              </li>
              <li className="pb-5 opacity-50">
                <Link href="">For Executives</Link>
              </li>
              <li className="pb-5 opacity-50">
                <Link href="">For Managers</Link>
              </li>
            </ul>
          </div>

          <div className="lg:text-start text-center py-3">
            <h1 className="text-[16px] font-semibold lg:pb-12 py-4">Solutions</h1>
            <ul>
              <li className="pb-5 opacity-50">
                <Link href="">Attract & retain talent</Link>
              </li>
              <li className="pb-5 opacity-50">
                <Link href="">Deversity & inclusion</Link>
              </li>
              <li className="pb-5 opacity-50">
                <Link href="">Flexible & remote</Link>
              </li>
              <li className="pb-5 opacity-50">
                <Link href="">Work & role design</Link>
              </li>
              <li className="pb-5 opacity-50">
                <Link href="">Management tools</Link>
              </li>
            </ul>
          </div>

          <div className="lg:text-start text-center py-3">
            <h1 className="text-[16px] font-semibold lg:pb-12 py-4">Resources</h1>
            <ul>
              <li className="pb-5 opacity-50">
                <Link href="">Working playbook</Link>
              </li>
              <li className="pb-5 opacity-50">
                <Link href="">Blog</Link>
              </li>
              <li className="pb-5 opacity-50">
                <Link href="">Help & Support</Link>
              </li>
              <li className="pb-5 opacity-50">
                <Link href="">Contact</Link>
              </li>
              <li className="pb-5 opacity-50">
                <Link href="">Careers</Link>
              </li>
            </ul>
          </div>
        </div> */}

        {/* <div className="lg:block hidden border-r-2 opacity-30 "></div> */}

        <div className="lg:text-start text-center py-3">
          <h1 className="text-[16px] font-semibold lg:pb-8 py-2 text-white">Get in Touch</h1>
          <p className="text-white opacity-50">Feel free to get in touch with us via email</p>
          <p className="text-white py-5 text-[18px] font-medium italic">contact@slog.ai</p>
        </div>
        <ContactForm/>
      </div>
    </div>
  )
}

export default Bottom
