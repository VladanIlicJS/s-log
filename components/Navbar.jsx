import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed w-full z-[100] bg-[#fff] ">
      <div className="flex justify-between items-center w-full px-2 2xl:px-40 border-b ">
        <div className="flex h-full items-center">
          <Link href="/">
            <Image
              className="cursor-pointer min-h-[29px]"
              src="/../public/assets/logo.png"
              alt="/"
              width="118px"
              height="29px"
            />
          </Link>

          <ul className="ml-[72px] h-[74px] flex flex-wrap -mb-px items-center">
            <li className="inline-block py-6 px-5 text-medium border-b-[1.5px] border-transparent hover:border-blue-600 ">
              <Link href="/">Home</Link>
            </li>
            <li className="inline-block py-6 px-5 text-medium border-b-[1.5px] border-transparent hover:border-blue-600 ">
              <Link href="/#about">About</Link>
            </li>
            <li className="inline-block py-6 px-5 text-medium border-b-[1.5px] border-transparent hover:border-blue-600 ">
              <Link className="outline-none inline-block" href="/#products">
                Products
              </Link>
            </li>
            <li className="inline-block py-6 px-5 text-medium border-b-[1.5px] border-transparent hover:border-blue-600 ">
              <Link href="/#features">Features</Link>
            </li>
            <li className="inline-block py-6 px-5 text-medium border-b-[1.5px] border-transparent hover:border-blue-600  ">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>  
        </div>

        <div>
            <button className="px-6 text-[#2a2d80] opacity-50 hover:opacity-100 hover:text-gray-700 transition duration-300 ease-out">Try Now</button>
            <button className="px-10 bg-[#a1a5ff] text-white pt-[10px] pb-[10px] rounded-xl hover:text-[#02073E] font-[500] transition duration-300 ease-out ">Try For Free</button>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
