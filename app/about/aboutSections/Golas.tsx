"use client";
import { RootState } from "@/store/store";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Golas() {
  const active = useSelector((state: RootState) => state.about.value);

  return (
    <section className={`${active !== "goals" && "hidden"} w-[1100px] max-w-full flex flex-col pb-10 md:pb-24 relative px-5`}>
      <div className="w-[900px] max-w-full">
        <h2 className="text-[30px] md:text-[50px] lg:text-[70px] xl:text-[90px]">Our goals</h2>
        <p className="uppercase text-[14px] md:text-[16px] lg:text-[18px]">Our goal at Towns and Seas is to create culturally rich spaces that blend global influences with innovative design, while fostering a sense of community and sustainability. We are committed to delivering unparalleled quality in every project, using materials and craftsmanship that stand the test of time. By pushing the boundaries of modern architecture and embracing the essence of different cultures, we aim to create environments that inspire, connect, and endure.</p>
      </div>

      <Image
        alt="goals stamp"
        src={'/images/goalsStamp.png'}
        width={1000}
        height={1000}
        className="h-[150px] md:h-[200px] lg:h-[220px] xl:h-[250px] w-auto object-contain relative lg:absolute right-0 md:right-5 lg:top-[300px] self-end"
      />

      <div className="w-[900px] max-w-full lg:mt-32">
        <h2 className="text-[30px] md:text-[50px] lg:text-[70px] xl:text-[90px]">objective</h2>
        <p className="uppercase text-[14px] md:text-[16px] lg:text-[18px]">Our objective at Towns & Seas is to craft unforgettable destinations in 10 of the world’s most desired cities, redefining urban and leisure living through innovation, sustainability, and world-class collaboration.</p>
      </div>
    </section>
  );
}