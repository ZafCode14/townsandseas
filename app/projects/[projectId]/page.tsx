import { fetchAllUnits, fetchProjectById } from "@/lib/api";
import Hero from "./Hero";
import Image from "next/image";
import Units from "./Units";

export default async function ProjectPage({ params }: { params: { projectId: string } }) {
  // Fetch the project data using the ID from the dynamic route
  const { projectId } = await params;
  const project = await fetchProjectById(projectId);
  const units = await fetchAllUnits();

  const filteredUnits = units.filter((unit) => unit.projectId === projectId)

  // If no project is found, return a "Not Found" message
  if (!project) {
    return (
      <main className="pt-24 text-[black] h-[70vh] flex justify-center items-center">
        <h1 className="text-[30px] md:text-[50px] font-bold">project not found</h1>
      </main>
    );
  }

  return (
    <main className="
      flex flex-col items-center
    ">
      <Hero project={project} />
      {/** Title */}
      <h1 className="
        lowercase
        text-[70px] md:text-[100px] text-[#636D46]
      ">{project.name}</h1>

      {/** Category / Location / sqm */}
      <div className="
        w-[1000px] max-w-full
        flex justify-between
        px-3 text-[black] text-[14px] md:text-[22px] mb-10
      ">
        <p className="uppercase">{project.category}</p>
        <p className="uppercase">{project.location}</p>
        <p className="uppercase">{project.spaces.from} - {project.spaces.to} <span className="lowercase">sqm</span></p>
      </div>

      {/** Map / Description / Brochure / Far From */}
      <div className="
        w-[1300px] max-w-full
        flex flex-col md:flex-row
        mb-3 md:mb-5 lg:mb-10
      ">
        <Image
          src={project.map.fileUrl || "/images/noImage.svg"}
          alt="map image"
          width={3000}
          height={3000}
          className="h-[80vw] md:h-[44vw] xl:h-[550px] md:w-[50%] object-cover"
        />
        <div className="
          h-[80vw] md:h-[44vw] xl:h-[550px]
          md:w-[50%] bg-[#636D46]
          flex flex-col text-[#F9EFE8] text-[14px] sm:text-[16px] lg:text-[20px] p-3 sm:p-5 lg:p-10
          relative
        ">
          <p className="uppercase text-justify">dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis  nostrud. exerci tation    ullamcorper </p>
          <div className="
            flex justify-around mt-5
          ">
            <div className="flex flex-col items-center">
              <p>{project.farFrom.location1.distance}</p>
              <p>{project.farFrom.location1.name}</p>
            </div>
            <div className="flex flex-col items-center">
              <p>{project.farFrom.location2.distance}</p>
              <p>{project.farFrom.location2.name}</p>
            </div>
            <div className="flex flex-col items-center">
              <p>{project.farFrom.location3.distance}</p>
              <p>{project.farFrom.location3.name}</p>
            </div>
          </div>
          {/** Download Brochure */}
          <a href={project.brochure.fileUrl} 
            target="_blank" 
            rel="noopener noreferrer"
          className="
            lowercase cursor-pointer
            absolute bottom-3 md:bottom-5 lg:bottom-10 right-3 md:right-5 lg:right-10
          "><button className="text-[24px] md:text-[32px] hover:underline">download brouchure</button></a>
        </div>
      </div>

      {/** Plan */}
      <Image
        src={project.plan.fileUrl || "/images/noImage.svg"}
        alt="map image"
        width={3000}
        height={3000}
        className="h-[50vw] xl:h-[600px] object-cover px-3 md:px-5 lg:px-10 mb-3 md:mb-5 lg:mb-10 w-[1300px] max-w-full"
      />

      {/** Units Section */}
      <Units units={filteredUnits}/>

    </main>
  );
}