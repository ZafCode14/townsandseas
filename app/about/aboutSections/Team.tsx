"use client";
import { RootState } from "@/store/store";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Team() {
  const active = useSelector((state: RootState) => state.about.value);

  return (
    <section className={`${active !== "team" && "hidden"} w-[1100px] max-w-full flex flex-col pb-10 md:pb-24 relative px-5`}>
      <div className="w-[900px] max-w-full">
        <h2 className="text-[30px] md:text-[50px] lg:text-[70px] xl:text-[90px]">partners</h2>
        <p className="uppercase text-[14px] md:text-[16px] lg:text-[18px]">At Towns and Seas, our partners are more than collaborators; they are integral to our vision of creating culturally infused, distinctive spaces. We carefully select partners who share our values of innovation, quality, and global perspective. Together, we work to bring bold ideas to life, ensuring that each project meets the highest standards and reflects the unique character of the world’s most inspiring cities.</p>
      </div>

      <Image
        alt="goals stamp"
        src={'/images/goalsStamp.png'}
        width={1000}
        height={1000}
        className="h-[150px] md:h-[200px] lg:h-[220px] xl:h-[250px] w-auto object-contain relative lg:absolute right-0 lg:top-[-100px] self-end"
      />

      <div className="w-[900px] max-w-full lg:mt-20">
        <h2 className="text-[30px] md:text-[50px] lg:text-[70px] xl:text-[90px]">The team</h2>
        <p className="uppercase text-[14px] md:text-[16px] lg:text-[18px]">Our team at Towns and Seas is a dynamic group of professionals who share a passion for exploration and design. With expertise in architecture, cultural research and development, we are united by a common goal: to create spaces that resonate with life and global character. Each member of our team brings a wealth of experience and creativity, ensuring that every Towns and Seas project is a unique blend of innovation, craftsmanship, and cultural depth.</p>
      </div>
    </section>
  );
}