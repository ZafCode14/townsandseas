"use client";
import { AboutPage } from "@/lib/types";
import { RootState } from "@/store/store";
import Image from "next/image";
import { useSelector } from "react-redux";

type Props = {
  aboutPage: AboutPage;
}
export default function Mission({ aboutPage }: Props) {
  const active = useSelector((state: RootState) => state.about.value);

  return (
    <section className={`${active !== "mission" && "hidden"} bg-[#636D46] flex justify-center w-full pb-24 pt-10 px-5`}>
      <div className="w-[1400px] max-w-full text-[#F9EFE8] relative flex flex-col">
        {/** Title */}
        <h2 className={`
          self-end
          max-w-[70vw] xl:max-w-[950px]
          text-[6.5vw]  xl:text-[90px]
          leading-[6.9vw] xl:leading-[95px]
          mt-5 md:mt-10 lg:mt-20
        `}>{aboutPage.ourEthos.title}</h2>
        {/** Image */}
        <Image
          alt="mission stamp"
          src={'/images/stamps/stampOrange.png'}
          width={300}
          height={300}
          className="h-[21vw] xl:h-[250px] w-auto object-contain absolute top-0"
        />
        {/** Image */}
        <Image
          alt="vission stamp"
          src={'/images/stamps/stampParis.png'}
          width={300}
          height={300}
          className="h-[21vw] xl:h-[250px] w-auto object-contain absolute bottom-[-100px] md:bottom-[-150px] lg:bottom-[-200px] right-0 z-10"
        />

        <div className={`flex flex-col md:flex-row w-full justify-center mt-10 lg:mt-20`}>
          {/** Title */}
          <h2 className={`
            self-start mb-5 md:mb-0 lg:px-5 xl:px-10
            md:w-[30%] flex justify-center
            text-[20px] md:text-[40px] lg:text-[60px]
            leading-[20px] md:leading-[40px] lg:leading-[60px]
          `}>{aboutPage.ourEthos.etho1Title}</h2>
          {/** Text */}
          <p className={`
            uppercase 
            w-[750px] text-[12px] md:text-[14px] lg:text-[17px]
            max-w-full text-justify
          `}>{aboutPage.ourEthos.etho1Text}</p>
        </div>

        <div className={`flex flex-col md:flex-row w-full justify-center mt-10 lg:mt-20`}>
          {/** Title */}
          <h2 className={`
            self-start mb-5 md:mb-0 lg:px-5 xl:px-10
            md:w-[30%] flex justify-center
            text-[20px] md:text-[40px] lg:text-[60px]
            leading-[20px] md:leading-[40px] lg:leading-[60px]
          `}>{aboutPage.ourEthos.etho2Title}</h2>
          {/** Text */}
          <p className={`
            uppercase 
            w-[750px] text-[12px] md:text-[14px] lg:text-[17px]
            max-w-full text-justify
          `}>{aboutPage.ourEthos.etho2Text}</p>
        </div>
      </div>
    </section>
  );
}