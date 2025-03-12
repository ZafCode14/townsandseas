import Contact from "./homeSections/Contact";
import Hero from "./homeSections/Hero";
import Info from "./homeSections/About";
import Offer from "./homeSections/Offer";
import OurProjects from "./homeSections/OurProjects";
import { fetchMainPage } from "@/lib/api";

export default async function Home() {
  const mainPage = await fetchMainPage();

  return (
    <main className="flex flex-col items-center">
      <div id="hero"></div>
      <Hero/>
      <OurProjects mainPage={mainPage}/>
      <Info/>
      <div id="offer" className="relative top-[-75px]"></div>
      <Offer mainPage={mainPage}/>
      <div id="contact" className="relative top-[-75px]"></div>
      <Contact mainPage={mainPage}/>
    </main>
  );
}
