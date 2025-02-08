import Image from "next/image";

export default function Richness() {
  return (
    <div className="flex flex-col">
      {/** Main heading */}
      <div className="w-full flex relative mb-20">
        <div className="flex w-[1000px] max-w-full relative z-10">
          <h1 className={`
            leading-[8vw] text-[8vw]
            md:leading-[70px] md:text-[70px] 
            lg:leading-[100px] lg:text-[100px]
          `}>the richness of global <br/>cultures <span className={`
          ml-[17vw] md:ml-[140px] lg:ml-[180px]
          `}>modern <br/>living.</span></h1>
          <Image
            alt="and icon"
            src={'/icons/and.svg'}
            width={0}
            height={0}
            className={`
              h-[12vw] md:h-[110px] lg:h-[150px] 
              w-auto 
              object-contain absolute 
              top-[8vw] lg:top-[90px] 
              left-[32vw] md:left-[290px] lg:left-[390px]
            `}
          />
        </div>
        <Image
          alt="info stamp"
          src={'/images/infoStamp.png'}
          width={1000}
          height={1000}
          className={`
            h-[30vw] md:h-[300px] lg:h-[350px] 
            w-auto object-contain absolute right-0 top-[50px] md:top-[-70px]
          `}
        />
      </div>

      <p className="text-[14px] md:text-[18px] uppercase">Each space is designed to reflect a story, a journey, and a deep connection to its cultural roots. By merging the vibrancy of towns with the tranquility of the seas, we create environments that are not just places to live or work, but destinations that reflect the soul of diverse cultures. With every project, we aim to bring life, personality, and a sense of global identity to our developments.</p>
    </div>
  );
}