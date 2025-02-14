"use client";
import { RootState } from "@/store/store";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Mission() {
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
        `}>A Vision that travels, a craft that Endures</h2>
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
          `}>our ethos are clear</h2>
          {/** Text */}
          <p className={`
            uppercase 
            w-[750px] text-[12px] md:text-[14px] lg:text-[17px]
            max-w-full text-justify
          `}>Build spaces that carry the richness of global cultures.Blend architectural heritage with contemporary living.Create homes, streets, and landmarks that feel like they’ve always belonged. We design for the rhythm of life—where every pathway, every facade, every courtyard feels intentional, timeless, and true.</p>
        </div>

        <div className={`flex flex-col md:flex-row w-full justify-center mt-10 lg:mt-20`}>
          {/** Title */}
          <h2 className={`
            self-start mb-5 md:mb-0 lg:px-5 xl:px-10
            md:w-[30%] flex justify-center
            text-[20px] md:text-[40px] lg:text-[60px]
            leading-[20px] md:leading-[40px] lg:leading-[60px]
          `}>Looking ahead</h2>
          {/** Text */}
          <p className={`
            uppercase 
            w-[750px] text-[12px] md:text-[14px] lg:text-[17px]
            max-w-full text-justify
          `}>To be the ultimate destination maker, crafting iconic spaces that inspire, connect, and enrich lives. At Towns & Seas, we redefine luxury by delivering exceptional experiences beyond real estate, shaping vibrant communities, and offering the ultimate lifestyle in the world’s most desirable cities</p>
        </div>
      </div>
    </section>
  );
}