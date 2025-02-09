'use client';
import Link from "next/link";
import HeaderLink from "./HeaderLink";
import { useState } from "react";

export default function PhoneNav() {
  const [show, setShow] = useState(false);
  return (
    <>
      {/** Burger */}
      <div className="absolute w-7 h-5 right-5 lg:hidden flex flex-col justify-between cursor-pointer" onClick={() => setShow(true)}>
        <div className="w-full h-[20%] bg-[#F9EFE8] rounded-md"></div>
        <div className="w-full h-[20%] bg-[#F9EFE8] rounded-md"></div>
        <div className="w-full h-[20%] bg-[#F9EFE8] rounded-md"></div>
      </div>

      {/** Phone nav */}
      <div className={`
        fixed top-0 right-0
        h-[150vh] w-full max-w-full
        lg:hidden
        duration-300 transition-all
        ${!show ? "translate-x-[100%]" : "translate-x-0"}
      `} onClick={() => setShow(false)}>
        <div className={` 
          absolute right-0
          h-full px-10 py-20
          flex flex-col
          w-[250px]
          bg-[#B54D2C]
        `} onClick={(e) => e.stopPropagation()}>
          <div onClick={() => setShow(false)}> <HeaderLink name="ABOUT US" path="/about"/> </div>
          <Link onClick={() => setShow(false)} href={'/#offer'} className="hover:underline py-5 lg:py-0">WHAT WE OFFER</Link>
          <div onClick={() => setShow(false)}> <HeaderLink name="OUR PROJECTS" path="/projects"/> </div>
          <Link onClick={() => setShow(false)} href={'/#contact'} className="hover:underline py-5 lg:py-0">GET IN TOUCH</Link>
        </div>
      </div>
    </>
  );
}