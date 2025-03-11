"use client";
import { Project } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Props = {
  projects: Project[];
};
export default function Projects({ projects }: Props) {
  const searchParams = useSearchParams();
  const search: string = searchParams.get("category") || "residential";

  const filteredProjects = projects.filter((project) => project.category === search);

  return (
    <div className={`flex flex-wrap w-[1300px] max-w-full px-3 py-10`}>
      {filteredProjects.map((project, index) => {
        return (
          <div key={index} className={`
            w-full md:w-1/2 
            flex flex-col px-3 text-black mb-5
          `}>
            <Link href={`/projects/${project.id}`}>
              <Image
                src={project.heroImages[0]?.fileUrl || "/images/noImage.svg"}
                alt="project image"
                width={3000}
                height={3000}
                className="h-[55vw] md:h-[30vw] xl:h-[380px] w-full object-cover"
              />
            </Link>
            <h2 className={`lowercase text-[32px]`}>{project.name}</h2>
            <p className={`uppercase text-[16px]`}>{project.location}</p>
          </div>
        )
      })}
    </div>
  )
}
