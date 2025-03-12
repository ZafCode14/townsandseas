"use client";
import { AboutPage } from "@/lib/types";
import { RootState } from "@/store/store";
import Image from "next/image";
import { useSelector } from "react-redux";

type Props = {
  aboutPage: AboutPage;
}
export default function Golas({ aboutPage }: Props) {
  const active = useSelector((state: RootState) => state.about.value);

  return (
    <section className={`${active !== "goals" && "hidden"} w-[1100px] max-w-full flex flex-col pb-10 md:pb-24 relative px-5`}>
      <div className="w-[900px] max-w-full">
        <h2 className="text-[#636D46] text-[30px] md:text-[50px] lg:text-[70px] xl:text-[90px]">Our goals</h2>
        <p className="uppercase text-[14px] md:text-[16px] lg:text-[18px] text-justify">{aboutPage.goalsAndObjectives.ourGoals}</p>
      </div>

      <Image
        alt="goals stamp"
        src={'/images/stamps/stampOrangeRound.png'}
        width={300}
        height={300}
        className="h-[20vw] xl:h-[200px] w-auto object-contain relative lg:absolute right-0 md:right-5 lg:top-[300px] self-end"
      />

      <div className="w-[900px] max-w-full lg:mt-32">
        <h2 className="text-[#636D46] text-[30px] md:text-[50px] lg:text-[70px] xl:text-[90px]">objective</h2>
        <p className="uppercase text-[14px] md:text-[16px] lg:text-[18px] text-justify">{aboutPage.goalsAndObjectives.objective}</p>
      </div>
    </section>
  );
}