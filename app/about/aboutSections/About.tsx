"use client";
import AboutComp from "@/app/homeSections/AboutComp";
import { AboutPage } from "@/lib/types";
import { RootState } from "@/store/store";
import Image from "next/image";
import { useSelector } from "react-redux";

type Props = {
  aboutPage: AboutPage;
}
export default function AboutS({ aboutPage }: Props) {
  const active = useSelector((state: RootState) => state.about.value);

  return (
    <section className={`${active !== "about" && "hidden"} w-[1300px] max-w-full flex flex-col items-center px-5`}>
      <div className="w-full">
        <AboutComp
          title={aboutPage.aboutUs.title}
          text={aboutPage.aboutUs.text}
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
        <p className="uppercase text-[14px] md:text-[18px] text-justify">{aboutPage.aboutUs.ourStory}</p>
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