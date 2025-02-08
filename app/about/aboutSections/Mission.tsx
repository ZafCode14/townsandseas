"use client";
import { RootState } from "@/store/store";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Mission() {
  const active = useSelector((state: RootState) => state.about.value);

  return (
    <section className={`${active !== "mission" && "hidden"} bg-[#636D46] flex justify-center w-full pb-24 pt-10 px-5`}>
      <div className="w-[1400px] max-w-full text-[#F9EFE8] relative">
        {/** Top Part */}
        <div className={`flex flex-col md:flex-row w-full justify-between`}>
          {/** Image */}
          <Image
            alt="mission stamp"
            src={'/images/missionStamp.png'}
            width={1000}
            height={1000}
            className="h-[150px] md:h-[200px] lg:h-[220px] xl:h-[250px] w-auto object-contain absolute left-[130px] top-0 md:static"
          />
          {/** Title */}
          <h2 className="relative md:right-[50px] top-[90px] md:top-[110px] text-[30px] md:text-[50px] lg:text-[70px] xl:text-[90px]">Mission</h2>
          {/** Text */}
          <p className="uppercase max-w-full relative top-[120px] md:top-[140px] w-[750px] mb-10 text-[14px] md:text-[16px] lg:text-[18px]">“At Towns & Seas, we create one-of-a-kind luxury destinations in the world’s most desirable cities. Through tailored experiences, innovation, sustainable practices, and world-class collaboration, we design vibrant communities that redefine urban and leisure living, prioritize customer satisfaction, and leave a lasting impact.”</p>
        </div>

        {/** Bottom Part */}
        <div className="flex flex-col-reverse md:flex-row w-full justify-around mt-10 md:mt-44">
          {/** Text */}
          <p className="uppercase max-w-full relative top-5 md:top-[50px] w-[750px] md:mb-10 md:pr-10 xlg:pr-0 text-[14px] md:text-[16px] lg:text-[18px]">“To be the ultimate destination maker, crafting iconic spaces that inspire, connect, and enrich lives. At Towns & Seas, we redefine luxury by delivering exceptional experiences beyond real estate, shaping vibrant communities, and offering the ultimate lifestyle in the world’s most desirable cities.”</p>
          {/** Title */}
          <>
          <h2 className="relative  text-[30px] md:text-[50px] lg:text-[70px] xl:text-[90px]">Vission</h2>
          {/** Image */}
          <Image
            alt="vission stamp"
            src={'/images/vissionStamp.png'}
            width={1000}
            height={1000}
            className="h-[150px] md:h-[200px] lg:h-[220px] xl:h-[250px] w-auto object-contain relative top-[50px]"
          />
          </>
        </div>
      </div>
    </section>
  );
}