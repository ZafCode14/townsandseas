"use client";
import { useState } from "react";
import DeleteProject from "./DeleteProject";
import ActivateProject from "./ActivateProject";
import UpdateProject from "./UpdateProject";
import { Project, Unit } from "@/lib/types";

type Props = {
  projects: Project[];
  units: Unit[];
};

export default function Projects({ projects, units }: Props) {
  const [editedProjectId, setEditedProjectId] = useState<string | null>(null);

  const handleEditClick = (projectId: string) => {
    if (editedProjectId === projectId) {
      setEditedProjectId(null); // Close the project if it is already being edited
    } else {
      setEditedProjectId(projectId); // Set the project to be edited
    }
  };

  return (
    <div className={`flex flex-col items-center w-full`}>
      {projects.map((project) => (
        <div
          key={project.id}
          className={`
            w-[700px] max-w-full p-2 my-2 bg-transparent border border-black 
            flex flex-col
            transition-all duration-300 ease-in-out
          `}
        >
          {/** Project nav */}
          <div className={`flex justify-center`}>
            <p className="flex-1">{project.name}</p>
            <ActivateProject project={project} />
            <DeleteProject project={project} units={units} />
            <button
              onClick={() => handleEditClick(project.id)}
              className="text-blue-600"
            >
              {editedProjectId === project.id ? "close" : "edit"}
            </button>
          </div>

          {/** Edit Project (conditionally rendered with transition) */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              editedProjectId === project.id ? "max-h-auto opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <UpdateProject project={project} units={units} />
          </div>
        </div>
      ))}
    </div>
  );
}