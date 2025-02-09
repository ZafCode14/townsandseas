import Link from "next/link";
import HeaderBackground from "./HeaderBackground";
import HeaderLink from "./HeaderLink";
import Image from "next/image";
import PhoneNav from "./PhoneNav";

export default function Header() {
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
        <div className={`hidden lg:flex justify-around flex-1 h-full pt-2`}>
          <div className="hover:translate-x-[20px] duration-300 transition-all">
            <HeaderLink name="ABOUT US" path="/about"/>
          </div>
          <div className="hover:translate-x-[20px] duration-300 transition-all">
            <HeaderLink name="OUR PROJECTS" path="/projects"/>
          </div>
        </div>

        {/** Header Logo */}
        <Link href={'/#heor'} className="w-[150px] md:w-[200px] lg:w-[250px]">
          <Image
            alt="footer logo"
            src={'/icons/logo1.svg'}
            width={0}
            height={0}
            className={`w-full h-auto`}
          />
        </Link>

        {/** Rigth Side of the header */}
        <div className={`justify-around flex-1 pt-2 hidden lg:flex`}>
          <Link href={'/#offer'} className="hover:underline hover:translate-x-[20px] duration-300 transition-all">WHAT WE OFFER</Link>
          <Link href={'/#contact'} className="hover:underline hover:translate-x-[20px] duration-300 transition-all">GET IN TOUCH</Link>
        </div>

        <PhoneNav/>
      </div>

    </header>
  );
}