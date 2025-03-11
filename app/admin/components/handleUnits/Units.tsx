"use client";
import { useState } from "react";
import { Unit } from "@/lib/types";
import ActivateUnit from "./ActivateUnit";
import DeleteUnit from "./DeleteUnit";
import UpdateUnit from "./UpdateUnit";

type Props = {
  units: Unit[];
  projectId: string;
};

export default function Units({ units, projectId }: Props) {
  const [editedUnitId, setEditedUnitId] = useState<string | null>(null);

  const handleEditClick = (unitId: string) => {
    if (editedUnitId === unitId) {
      setEditedUnitId(null);
    } else {
      setEditedUnitId(unitId);
    }
  };

  return (
    <div className={`flex flex-col items-center w-full`}>
      {units.filter((unit) => unit.projectId === projectId).map((unit) => (
        <div
          key={unit.id}
          className={`
            w-[700px] max-w-full p-2 my-2 bg-transparent border border-black 
            flex flex-col
            transition-all duration-300 ease-in-out
          `}
        >
          {/** Unit nav */}
          <div className={`flex justify-center`}>
            <p className="flex-1">{unit.name}</p>
            <ActivateUnit unit={unit} />
            <DeleteUnit unit={unit} />
            <button
              onClick={() => handleEditClick(unit.id)}
              className="text-blue-600"
            >
              {editedUnitId === unit.id ? "close" : "edit"}
            </button>
          </div>

          {/** Edit Unit (conditionally rendered with transition) */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              editedUnitId === unit.id ? "max-h-auto opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <UpdateUnit unit={unit} />
          </div>
        </div>
      ))}
    </div>
  );
}