import Contact from "./homeSections/Contact";
import Hero from "./homeSections/Hero";
import Info from "./homeSections/About";
import Offer from "./homeSections/Offer";
import OurProjects from "./homeSections/OurProjects";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div id="hero"></div>
      <Hero/>
      <OurProjects/>
      <Info/>
      <div id="offer" className="relative top-[-75px]"></div>
      <Offer/>
      <div id="contact" className="relative top-[-75px]"></div>
      <Contact/>
    </main>
  );
}
