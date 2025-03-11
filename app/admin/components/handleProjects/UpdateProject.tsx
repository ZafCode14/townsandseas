"use client";
import { Project, Unit } from "@/lib/types";
import { useState } from "react";
import ProjectFrom from "./ProjectFrom";
import UnitSection from "../handleUnits/UnitSection";
import ProjectImagesSection from "./ProjectImagesSection";

type Props = {
  project: Project;
  units: Unit[];
};

export default function UpdateProject({ project, units }: Props) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(prev => (prev === section ? null : section)); // Toggle logic
  };

  return (
    <div className="flex flex-col w-full mt-5">
      {/* Update Information Section */}
      <h2 onClick={() => toggleSection("projectForm")} className="text-center cursor-pointer p-2 text-[20px]">
        update project information
      </h2>
      <div className={`${activeSection === "projectForm" ? "h-auto" : "h-0 overflow-hidden"} transition-all`}>
        <ProjectFrom project={project} />
      </div>

      {/* Update Images and Files Section */}
      <h2 onClick={() => toggleSection("images")} className="text-center cursor-pointer p-2 text-[20px]">
        update project images and brochure
      </h2>
      <div className={`${activeSection === "images" ? "h-auto" : "h-0 overflow-hidden"} transition-all`}>
        <ProjectImagesSection project={project} />
      </div>

      {/* Update Unit Section */}
      <h2 onClick={() => toggleSection("unitSection")} className="text-center cursor-pointer p-2 text-[20px]">
        update units
      </h2>
      <div className={`${activeSection === "unitSection" ? "h-auto" : "h-0 overflow-hidden"} transition-all`}>
        <UnitSection project={project} units={units} />
      </div>
    </div>
  );
}