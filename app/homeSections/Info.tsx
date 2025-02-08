import Richness from "./Richness";
import Image from "next/image";

export default function Info() {
  return (
    <section className={`text-[#252626] flex flex-col py-10 md:py-24 w-[1300px] max-w-full px-5`}>
      <Richness/>

      <div className="self-end mt-10 md:mt-20">
        <p className="text-[14px] md:text-[18px]">ABOUT</p>
        <Image
          alt="footer logo"
          src={'/icons/logo2.svg'}
          width={0}
          height={0}
          className={`w-[200px] md:w-[270px] lg:w-[350px] h-auto`}
        />
      </div>
    </section>

  );
}