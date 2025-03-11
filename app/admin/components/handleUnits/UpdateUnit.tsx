"use client";
import { Unit } from "@/lib/types";
import { useState } from "react";
import UnitForm from "./UnitForm";
import UnitImagesSection from "./UnitImagesSection";

type Props = {
  unit: Unit;
};

export default function UpdateUnit({ unit }: Props) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(prev => (prev === section ? null : section)); // Toggle logic
  };

  return (
    <div className="flex flex-col w-full mt-5">
      {/* Update Information Section */}
      <h2 onClick={() => toggleSection("unitForm")} className="text-center cursor-pointer p-2 text-[20px]">
        update unit information
      </h2>
      <div className={`${activeSection === "unitForm" ? "h-auto" : "h-0 overflow-hidden"} transition-all`}>
        <UnitForm unit={unit} />
      </div>

      {/* Update Images and Files Section */}
      <h2 onClick={() => toggleSection("images")} className="text-center cursor-pointer p-2 text-[20px]">
        update unit images
      </h2>
      <div className={`${activeSection === "images" ? "h-auto" : "h-0 overflow-hidden"} transition-all`}>
        <UnitImagesSection unit={unit} />
      </div>
    </div>
  );
}