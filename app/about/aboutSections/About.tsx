"use client";
import AboutComp from "@/app/homeSections/AboutComp";
import { RootState } from "@/store/store";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function AboutS() {
  const active = useSelector((state: RootState) => state.about.value);

  return (
    <section className={`${active !== "about" && "hidden"} w-[1300px] max-w-full flex flex-col items-center px-5`}>
      <div className="w-full">
        <AboutComp
          title="A name rooted in experiences"
          text="Towns & Seas was founded on a love for places that tell stories. We take inspiration from the world’s most remarkable cities and coastlines, shaping architecture that respects history while embracing the future."
        />
      </div>
      <Image
        alt="stamps"
        src={'/images/stamps/stampTwoGray.png'}
        width={300}
        height={300}
        className="w-[120px] md:w-[150px] lg:w-[200px] h-auto mt-5 mg:mt-10 self-end md:self-start"
      />
      <div className="w-[850px] max-w-full relative top-[-50px] md:top-[-100px] lg:left-[50px]">
        <h2 className="text-[40px] md:text-[70px] lg:text-[100px] text-[#636D46]">Our story</h2>
        <p className="uppercase text-[14px] md:text-[18px]">Inspired by the legendary explorer Pytheas of Massalia, Towns and Seas was born out of a passion for discovery. Like Pytheas, who ventured into the unknown to bring back stories of distant lands, we draw from the world’s diverse cities, cultures, and landscapes to inform our designs. Each project reflects the beauty, life, and personality of the places we explore, creating environments that are more than just buildings—they are narratives rich in history, culture, and spirit. At Towns and Seas, we are committed to bringing the world home, one project at a time.</p>
      </div>
      <Image
        alt="001"
        src={'/images/001.png'}
        width={3000}
        height={1000}
        className="w-full h-auto mt-5 md:mt-10 pb-10 lg:pb-24"
      />
    </section>
  );
}