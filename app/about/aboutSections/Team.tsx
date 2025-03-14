"use client";
import { AboutPage } from "@/lib/types";
import { RootState } from "@/store/store";
import Image from "next/image";
import { useSelector } from "react-redux";

type Props = {
  aboutPage: AboutPage;
}
export default function Team({ aboutPage }: Props) {
  const active = useSelector((state: RootState) => state.about.value);

  return (
    <section className={`${active !== "team" && "hidden"} w-[1100px] max-w-full flex flex-col pb-10 md:pb-24 relative px-5`}>
      <div className="w-[1300px] max-w-full flex flex-col mt-10">
        <h2 className={`
          text-[#636D46]
          text-[7vw] xl:text-[90px]
          leading-[7vw] xl:leading-[90px]
          w-[60vw] xl:w-[800px] max-w-full
        `}>The people behind the craft</h2>
        <p className={`
          uppercase self-end
          md:relative top-[-4vw] xl:top-[-50px]
          md:w-[65%] mt-5 md:mt-0
          text-[14px] md:text-[16px] lg:text-[18px] text-justify
        `}>{aboutPage.peopleBehindTheCraft.text}</p>
      </div>

      <Image
        alt="goals stamp"
        src={'/images/stamps/stampOrangeRound.png'}
        width={300}
        height={300}
        className="h-[20vw] xl:h-[200px] w-auto object-contain absolute right-5 top-[-10vw] xl:top-[-100px] self-end"
      />
    </section>
  );
}