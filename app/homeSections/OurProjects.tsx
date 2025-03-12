import { fetchAllProjects } from "@/lib/api";
import { MainPage } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  mainPage: MainPage;
}
export default async function OurProjects({ mainPage }:Props) {
  const projects = await fetchAllProjects();
  const activeProjects = projects.filter((project) => project.active === true)

  // Fetch the last project image for each category
  const availableCategories = [...new Set(activeProjects.flatMap((project) => project.category))];

  const lastProjects = availableCategories.map((category) => ({
    name: category,
    image: projects
      .filter((project) => project.category === category && project.active)
      .at(0)?.heroImages[0] || null,
  }));

  return (
    <section className={`
    text-[#252626] 
    flex flex-col items-end
    py-10 w-[1300px] max-w-full px-3 
    ${availableCategories.length === 0 && "hidden"}
    `}>
      <div className="flex justify-between w-full">
        <div className="flex-1 flex-col">
          <h2 className="text-[#636D46] leading-[8vw] text-[9vw] md:text-[7vw] xl:leading-[100px] xl:text-[80px]">
            our projects
          </h2>
          <Image
            alt="info stamp"
            src="/images/stamps/stampOrangeAnd.png"
            width={500}
            height={500}
            className="w-full md:w-[300px] md:translate-y-[-50px]"
          />
        </div>
        <div className="flex flex-col flex-[1.2]">
          <h1 className="text-[#636D46] leading-[8vw] text-[9vw] md:text-[7vw] xl:leading-[84px] xl:text-[80px]">
            {mainPage.ourProjects.title} 
          </h1>
          <p className="text-[14px] md:text-[18px] uppercase max-w-[750px] text-justify mt-10">
            {mainPage.ourProjects.text}
          </p>
        </div>
      </div>

      {/** Project Categories */}
      <div className="flex flex-wrap md:flex-nowrap w-full mt-5 gap-2 justify-center">
        {lastProjects.map(
          (project) =>
            project && (
              <div key={project.name} className="
                w-[calc(50%-0.5rem)] md:w-full h-[32vw] xl:h-[400px] 
                overflow-hidden 
                flex items-center relative group
              ">
                {project.image ?
                  <Image
                    alt={`${project.name} project`}
                    src={project.image.fileUrl}
                    width={2000}
                    height={2000}
                    className="h-full w-full object-cover duration-300 transform group-hover:scale-110"
                  /> : <div className="w-full h-full bg-[gray]"></div>
                }
                <Link 
                href={{ pathname: "/projects", query: { category: project.name } }} 
                className="
                  absolute w-full h-full right-0 top-0 
                  flex justify-center items-center 
                  group-hover:opacity-100 group-hover:bg-[#636d4681] 
                  duration-300 opacity-0 
                  text-[#F9EFE8] cursor-pointer
                ">
                  <p className="uppercase text-[20px] md:text-[28px]">{project.name}</p>
                </Link>
              </div>
            )
        )}
      </div>
    </section>
  );
}