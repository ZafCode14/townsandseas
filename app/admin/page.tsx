import { fetchAboutPage, fetchAllProjects, fetchAllUnits, fetchMainPage, fetchProjectPage } from "@/lib/api";
import Login from "./login";
import ProjectSection from "./components/handleProjects/ProjectSection";
import MainPageSection from "./components/handlePages/MainPageSection";
import AboutPageSection from "./components/handlePages/AboutPageSection";
import ProjectPageSection from "./components/handlePages/ProjectPageSection";

export default async function Page() {
  const [projects, units, mainPage, aboutPage, projectPage] = await Promise.all([
    fetchAllProjects(),
    fetchAllUnits(),
    fetchMainPage(),
    fetchAboutPage(),
    fetchProjectPage(),
  ]);

  return (
    <main className="pt-20 px-2 min-h-[100vh] flex flex-col items-center">
      <Login/>
      <MainPageSection mainPage={mainPage}/>
      <AboutPageSection aboutPage={aboutPage}/>
      <ProjectPageSection projectPage={projectPage}/>
      <ProjectSection projects={projects} units={units}/>
    </main>
  );
}