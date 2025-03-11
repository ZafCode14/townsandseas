"use client";
import { useState } from "react";
import { Unit } from "@/lib/types";
import { toggleUnitActiveStatus } from "@/actions/unitActions/firebaseEditAction";

type Props = {
  unit: Unit;
};

export default function ActivateUnit({ unit }: Props) {
  const [isActive, setIsActive] = useState(unit.active);

  const handleToggle = async () => {
    const response = await toggleUnitActiveStatus({ 
      id: unit.id, 
      currentStatus: isActive 
    });

    if (response.success) {
      setIsActive(!isActive);
    } else {
      console.error("Error toggling unit active status:", response.error);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <div
        onClick={handleToggle}
        className={`relative inline-flex items-center cursor-pointer w-12 h-6 bg-gray-300 rounded-full transition-colors duration-300 ease-in-out`}
      >
        <span
          className={`${
            isActive ? "translate-x-6 bg-green-500" : "translate-x-0 bg-gray-500"
          } inline-block w-6 h-6 transform rounded-full transition-all duration-300 ease-in-out`}
        ></span>
      </div>
    </div>
  );
}