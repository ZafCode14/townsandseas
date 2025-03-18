import { MainPage } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  mainPage: MainPage
}
export default function Offer({ mainPage }:Props) {
  return (
    <section className={`text-[#F9EFE8] bg-[#636D46] flex justify-center py-10 lg:py-24 w-full max-w-full px-5`}>
      <div className="w-[1300px] max-w-full flex flex-col">
        
        {/** Top part of the section */}
        <div className={`flex justify-between`}>
          <h2 className={`
            text-[32px] md:text-[60px] lg:text-[90px]
            leading-[40px] md:leading-[65px] lg:leading-[95px]
            w-[500px] max-w-full
          `}>{mainPage.discoverMore.title}</h2>
          <Image
            alt="footer logo"
            src={'/images/stamps/stampHomeAbout.png'}
            width={300}
            height={300}
            className={`w-[80px] md:w-[200px] h-auto object-contain`}
          />
        </div>

        {/** Lower part of the section */}
        <p className={`
          w-full max-w-[1000px] 
          text-[14px] md:text-[18px] lg:text-[24px] 
          mt-5 md:mt-10 lg:mt-20
          uppercase text-justify
        `}>{mainPage.discoverMore.text}</p>

        <Link href={'/about'} className="self-end">
          <h2 className={`
            mt-5 md:mt-10
            text-[20px] md:text-[30px] lg:text-[60px] 
            underline underline-offset-4 decoration-[2px] lg:underline-offset-8
          `}>discover more</h2>
        </Link>

        <div className={`flex flex-col md:flex-row mt-5 md:mt-10 lg:mt-20 w-full`}>
          <h2 className={`
            text-[32px] md:text-[60px] lg:text-[90px]
            leading-[40px] md:leading-[65px] lg:leading-[95px]
            md:w-[50%]
          `}>{mainPage.learnMore.title}</h2>
          <p className={`
            md:w-[50%]
            text-[14px] md:text-[18px] lg:text-[24px] 
            uppercase text-justify
          `}>{mainPage.learnMore.text}</p>
        </div>

        <Link href={'/about'} className="self-end">
          <h2 className={`
            mt-5 md:mt-10
            text-[20px] md:text-[30px] lg:text-[60px] 
            underline underline-offset-4 decoration-[2px] lg:underline-offset-8
          `}>learn more</h2>
        </Link>
      </div>
    </section>
  );
}