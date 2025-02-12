import Image from "next/image";
import AboutS from "./aboutSections/About";
import AboutNav from "./components/AboutNav";
import Mission from "./aboutSections/Mission";
import Golas from "./aboutSections/Golas";
import Team from "./aboutSections/Team";
import Values from "./aboutSections/Values";

export default function About() {
  return (
    <main className={`text-[#252626] flex flex-col items-center min-h-[80vh] pt-24`}>
      <div className="flex justify-between w-[1300px] max-w-full items-center px-5 mb-10 md:mb-24">
        <div className="flex-1">
          <Image
            alt="about stamp"
            src={'/images/stamps/stampAboutMain.png'}
            width={900}
            height={900}
            className="object-contain"
          />
        </div>
        <AboutNav/>
      </div>

      <AboutS/>
      <Mission/>
      <Golas/>
      <Values/>
      <Team/>
    </main>
  );
}