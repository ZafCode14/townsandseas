import Hero from "./Hero";
import { fetchAllProjects, fetchProjectPage } from "@/lib/api";
import Projects from "./Projects";
import { Suspense } from "react";
import Image from "next/image";

export default async function ProjectsPage() {
  const projects = await fetchAllProjects();
  const projectPage = await fetchProjectPage();

  const activeProjects = projects.filter((project) => project.active === true);

  return (
    <main className="w-full text-[#F9EFE8] flex flex-col items-center">
      {
        activeProjects.length > 0 ?
        <Suspense fallback={<div>Loading...</div>}>
          <Hero projectPage={projectPage}/>
          <Projects projects={activeProjects}/>
        </Suspense> :
        <div className="w-full h-screen flex justify-center items-center">
          <Image
            src={'/images/launchingSoon.jpg'} 
            alt="coming soon image"
            width={3000}
            height={3000}
            className="object-cover w-full h-full absolute top-0"
          />
          <Image
            src={'/images/stamps/launchingLeftStamp.png'} 
            alt="coming soon image"
            width={500}
            height={500}
            className="object-cover w-[200px] absolute left-5 bottom-[20%]"
          />
          <Image
            src={'/images/stamps/launchingMiddleStamp.png'} 
            alt="coming soon image"
            width={500}
            height={500}
            className="object-cover w-[500px] max-w-full absolute right-0 md:right-[20%] bottom-[5%]"
          />
          <Image
            src={'/images/stamps/launchingRightStamp.png'} 
            alt="coming soon image"
            width={500}
            height={500}
            className="object-cover w-[200px] absolute right-5 bottom-[40%]"
          />
          <div className="relative flex flex-col items-center">
            <p className="uppercase underline">our projects</p>
            <h1 className="
              text-[50px] md:text-[100px]
            ">launching soon</h1>
            <p className="text-[20px] md:text-[40px] uppercase font-[100]">stay tuned</p>
          </div>
        </div>
      }
    </main>
  );
}