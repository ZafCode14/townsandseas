'use client';
import Image from "next/image";
import FooterBackground from "./FooterBackground";
import { usePathname } from "next/navigation";

export default function Footer() {
  const p = usePathname();

  if (p === "/projects") {
    return null;
  }
  return (
    <footer className="relative flex justify-center py-10 px-5">
      {/** Footer background */}
      <FooterBackground/>

      {/** Left side of Footer */}
      <div className={`relative w-[1300px] flex justify-between`}>
        <div>
          {/** Logo */}
          <Image
            alt="footer logo"
            src={'/icons/logo4.svg'}
            width={0}
            height={0}
            className={`w-[80px] sm:w-[100px] md:w-[150px] lg:w-[200px] h-auto`}
          />
          {/** Icons */}
          <div className="flex mt-16">
            <a href="https://www.instagram.com/townsandseas/" target="_blank" rel="noopener noreferrer">
              <Image
                alt="instagram icon"
                src={'/icons/instagram.svg'}
                width={0}
                height={0}
                className={`w-[30px] md:w-[40px] lg:w-[50px] h-auto mr-3 lg:mr-5 lg:ml-10`}
              />
            </a>
            <a href="https://www.linkedin.com/company/townsandseas/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
              <Image
                alt="linkedin icon"
                src={'/icons/linkedin.svg'}
                width={0}
                height={0}
                className={`w-[30px] md:w-[40px] lg:w-[50px] h-auto mr-3 lg:mr-5`}
              />
            </a>
            <a href="https://www.facebook.com/Townsandseas" target="_blank" rel="noopener noreferrer">
              <Image
                alt="facebook icon"
                src={'/icons/facebook.svg'}
                width={0}
                height={0}
                className={`w-[30px] md:w-[40px] lg:w-[50px] h-auto mr-3 lg:mr-5`}
              />
            </a>
          </div>
        </div>

        {/** Right side of Footer */}
        <div className={`absolute bottom-0 right-0 text-[#F9EFE8] text-[12px] sm:text-[14px] lg:text-[18px]`}>
          <p>weare@townsandseas.com</p>
          <br/>
          <p>@2024 Towns & Seas.</p>
          <p>All Rights Reserved.</p>
        </div>
      </div>

    </footer>
  );
}