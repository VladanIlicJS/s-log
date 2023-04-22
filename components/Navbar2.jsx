import { useState } from "react"

import logo from "../public/assets/logo.jpg"
import menu from "../public/assets/menu.svg"
import close from "../public/assets/close.svg"
import { navLinks } from "../constants"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  const [active, setActive] = useState("Home")
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="w-full flex justify-between items-center navbar border-b 2xl:px-40 px-9 ">
      <div className=" flex justify-between items-center lg:gap-16 gap-10">
        <Image src={logo} alt="hoobank" width={118} height={29} />

        <ul className="list-none lg:flex hidden justify-end items-center flex-1 ">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`inline-block lg:px-2 px-0 text-medium py-6 border-b-[1.5px] border-transparent hover:border-blue-600  ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:flex  hidden">
        <button className="px-6 text-[#2a2d80] opacity-50 hover:opacity-100 hover:text-gray-700 transition duration-300 ease-out">
          Try Now
        </button>
        <Link href={"/demo"}>
          <button className="px-10 bg-[#a1a5ff] text-white pt-[10px] pb-[10px] rounded-xl hover:text-[#02073E] font-[500] transition duration-300 ease-out ">
            Try For Free
          </button>
        </Link>
      </div>

      <div className="lg:hidden flex flex-1 justify-end items-center py-6 z-100">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          width={28}
          height={28}
          className="object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient z-50 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar bg-[#A1A5FF]`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"} ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
