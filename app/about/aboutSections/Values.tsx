"use client";
import { RootState } from "@/store/store";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Values() {
  const active = useSelector((state: RootState) => state.about.value);
  const list = [
    {
      title: "we not I",
      text: "We believe in teamwork and shared success. Collaboration drives our projects and unites our people, ensuring every achievement is a collective effort."
    },
    {
      title: "genuine",
      text: "Honesty, integrity, and ethical conduct are at the heart of everything we do. We are transparent with our clients, partners, and teams."
    },
    {
      title: "community Impact",
      text: "We are dedicated to creating projects that positively impact the communities we serve, leaving a legacy of progress and development."
    },
    {
      title: "all in",
      text: "We are fully committed to every project and every relationship, ensuring clients can always rely on us to deliver on our promises with passion and dedication."
    },
    {
      title: "Sustainability",
      text: "Protecting the environment is integral to our work. We integrate eco-friendly practices to ensure long-term value for future generations."
    },
    {
      title: "innovation with purpose",
      text: "We embrace technology and forward- thinking strategies to solve challenges, improve efficiency, and deliver meaningful solutions."
    },
  ]

  return (
    <section className={`${active !== "values" && "hidden"} bg-[#636D46] flex justify-center w-full pb-24 pt-10 text-[#F9EFE8] px-5`}>
      <div className="flex flex-col items-center w-[1300px] max-w-full ">
        {/** Title */}
        <div className="relative w-full flex justify-center">
          <Image
            alt="values stamp"
            src={'/images/valuesStamp1.png'}
            width={1000}
            height={1000}
            className="h-[100px] md:h-[150px] lg:h-[200px] xl:h-[250px] w-auto object-contain absolute left-0 top-[-20px] md:top-0"
          />
          <h2 className="mt-16 text-[30px] md:text-[50px] lg:text-[70px] xl:text-[90px]">Our core values</h2>
          <Image
            alt="values stamp"
            src={'/images/valuesStamp2.png'}
            width={1000}
            height={1000}
            className="h-[70px] md:h-[90px] lg:h-[120px] xl:h-[150px] w-auto object-contain absolute right-0 top-12 md:top-32"
          />
        </div>

        {/** List of Values */}
        <div className="flex w-full flex-wrap md:mt-10 lg:mt-16">
          {
            list.map((el, index) => {
              return (
                <div key={index} className=" sm:w-[50%] lg:w-[33.333%] md:px-10 mt-20 md:mt-30 lg:mt-40">
                  <h2 className="text-[30px] lg:text-[36px] xl:text-[42px] leading-[40px] md:leading-[36px] lg:leading-[50px] md:mb-10 w-[80%] h-[84px]">{el.title}</h2>
                  <p className="uppercase text-[14px] md:text-[16px] lg:text-[18px]">{el.text}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
}