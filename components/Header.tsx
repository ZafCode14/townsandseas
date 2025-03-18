"use client";
import Link from "next/link";
import HeaderBackground from "./HeaderBackground";
import HeaderLink from "./HeaderLink";
import Image from "next/image";
import PhoneNav from "./PhoneNav";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function Header() {
  const p = usePathname();
  const projects = useSelector((state: RootState) => state.projects.projects);

  return (
    <header className={`
      fixed top-0 right-0 z-20
      flex justify-center items-center
      w-full
      text-[#F9EFE8] text-[17px] font-[100] py-3
      hover:bg-[#B54D2C]
    `}>
      <HeaderBackground/>

      <div className={`
        w-[1500px] max-w-full
        flex justify-center items-center
        relative
      `}>
        {/** Left side of the header */}
        <div className={`hidden lg:flex ${p === "/admin" && "lg:hidden"} justify-around flex-1 h-full pt-2`}>
          <div className="hover:translate-x-[20px] duration-300 transition-all">
            <HeaderLink name="ABOUT US" path="/about"/>
          </div>
          {
            projects.length > 0 ?
            <Link href={'/#projects'} className="hover:underline hover:translate-x-[20px] duration-300 transition-all">OUR PROJECTS</Link>
            :
            <div className="hover:translate-x-[20px] duration-300 transition-all">
              <HeaderLink name="OUR PROJECTS" path="/projects"/>
            </div> 
          }
        </div>

        {/** Header Logo */}
        <Link href={p !== '/admin' ? '/#hero' : '/admin'} className="w-[150px] md:w-[200px] lg:w-[250px]">
          <Image
            alt="footer logo"
            src={'/icons/logo1.svg'}
            width={0}
            height={0}
            className={`w-full h-auto`}
            priority
          />
        </Link>

        {/** Rigth Side of the header */}
        <div className={`justify-around flex-1 pt-2 hidden lg:flex ${p === "/admin" && "lg:hidden"}`}>
          <Link href={'/#offer'} className="hover:underline hover:translate-x-[20px] duration-300 transition-all">WHAT WE OFFER</Link>
          <Link href={'/#contact'} className="hover:underline hover:translate-x-[20px] duration-300 transition-all">GET IN TOUCH</Link>
        </div>

        <div className={`${p === '/admin' && "hidden"} h-full flex items-center`}>
          <PhoneNav/>
        </div>
      </div>

    </header>
  );
}