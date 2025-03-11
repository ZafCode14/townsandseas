import Link from "next/link";
import AboutComp from "./AboutComp";

export default function Info() {
  return (
    <section className={`text-[#252626] flex flex-col py-10 md:py-24 w-[1300px] max-w-full px-5`}>
      <AboutComp
        title="Designed with depth, built for generations"
        text="Some places leave a mark. A street that feels like home, a view that lingers with you. At Towns & Seas, we develop spaces that resonate."
      />

      <div className="self-end mt-10 md:mt-20 text-[#636D46] flex flex-col items-center">
        <p className="text-[14px] md:text-[18px] lg:text-[24px]">LEARN ABOUT</p>
        <Link href={'/about'}><h2 className="text-[40px] md:text-[60px] lg:text-[80px] underline underline-offset-4 decoration-[3px] lg:underline-offset-8">our story</h2></Link>
      </div>
    </section>
  );
}