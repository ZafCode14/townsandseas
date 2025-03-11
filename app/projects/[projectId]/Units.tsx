"use client";
import { useState } from "react";
import { Unit } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import Slider from "./Slider";

type Props = {
  units: Unit[];
};

export default function Units({ units }: Props) {
  const activeUnits = units.filter((unit) => unit.active === true);

  // Get unique unit types
  const unitTypes = [...new Set(activeUnits.map((unit) => unit.type))];

  // State for selected type and feature
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  // Get features based on selected type
  const unitFeatures = selectedType
    ? [...new Set(activeUnits.filter((unit) => unit.type === selectedType).flatMap((unit) => unit.feature))]
    : [];

  // Get unit based on selected feature
  const unit = selectedFeature
    ? activeUnits.filter((unit) => unit.type === selectedType && unit.feature.includes(selectedFeature))
    : [];

  return (
    <div className="p-4 text-[#636D46] flex flex-col w-[1300px] max-w-full relative">
      <div className={`flex`}>
        <div className="flex flex-col mt-2 text-[24px] md:text-[36px]">
          {unitTypes.map((type) => (
            <button
              key={type}
              className={`
                lowercase px-4 rounded 
                ${selectedType === type && "underline"}
              `}
              onClick={() => {
                setSelectedType(type);
                setSelectedFeature(null);
              }}
            >
              {type}
            </button>
          ))}
        </div>

        {selectedType && (
          <div className="flex flex-wrap gap-2 flex-1 justify-end h-full pt-5 md:text-[20px] text-[14px]">
            {unitFeatures.map((feature) => (
              <button
                key={feature}
                className={`lowercase px-4 rounded ${selectedFeature === feature && "underline"}`}
                onClick={() => setSelectedFeature(feature)}
              >
                {feature}
              </button>
            ))}
          </div>
        )}
      </div>

      {/** Unit */}
      {selectedFeature && unit && (
      <div className="mt-2 w-full">
        <Link href={'/#contact'} className="
          absolute bottom-0 right-0
        "><button className="
          p-5 md:p-10 text-[24px] md:text-[36px] lowercase
          underline hover:text-[#B54D2C]
          duration-300
        ">book your unit</button></Link>
        <div className="
          flex flex-col md:flex-row w-full
        ">
          {/** Unit Images */}
          <div className="md:w-[60%] h-[60vw] md:h-[500px]">
            <Slider list={unit[0].unitImages}/>
          </div>

          <div className="self-end md:w-[40%] md:ml-3 mt-5">
            <Link 
              target="_blank" 
              rel="noopener noreferrer"
              href={unit[0].viewer} 
              className="flex items-center mb-2"
            >
              <Image
                src={'/icons/360.svg'}
                alt="360"
                width={0}
                height={0}
                className="
                  h-[16px] w-auto object-contain mr-1
                "
              />
              <p className="">360 viewer</p>
            </Link>
            {/** Plan Images */}
            <div className="h-[40vw] md:h-[240px]">
              <Slider list={unit[0].unitPlans}/>
            </div>
          </div>

        </div>
      </div>
      )}

      <h2 className="lowercase text-[50px] md:text-[88px]">{unit[0]?.name}</h2>
      <p className="text-[#252626] uppercase w-[800px] max-w-full text-justify mb-10 text-[14px] md:text-[16px]">{unit[0]?.description}</p>

      {unit[0]?.attributes.map((attribute, index) => {
        return (
          <div key={index} className="text-[#252626] uppercase text-[20px]">
            <p>{attribute}</p>
          </div>
        )
      })}

    </div>
  );
}