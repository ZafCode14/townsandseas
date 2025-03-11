import Hero from "./Hero";
import { fetchAllProjects, fetchProjectPage } from "@/lib/api";
import Projects from "./Projects";
import { Suspense } from "react";

export default async function ProjectsPage() {
  const projects = await fetchAllProjects();
  const projectPage = await fetchProjectPage();

  const activeProjects = projects.filter((project) => project.active === true);

  return (
    <main className="w-full text-[#F9EFE8] flex flex-col items-center">
      <Suspense fallback={<div>Loading...</div>}>
        <Hero projectPage={projectPage}/>
        <Projects projects={activeProjects}/>
      </Suspense>
    </main>
  );
}