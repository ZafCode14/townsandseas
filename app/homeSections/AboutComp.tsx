import Image from "next/image";

type Props = {
  text: string;
  title: string;
}
export default function AboutComp({ title, text }:Props) {
  return (
    <div className="flex flex-col">
      {/** Main heading */}
      <div className="w-full flex relative mb-5 items-center">
        <div className="flex w-[1000px] max-w-full relative z-10">
          <h1 className={`
            text-[#636D46]
            leading-[8vw] text-[9vw] md:text-[7vw] xl:leading-[100px] xl:text-[95px]
          `}>{title}</h1>
        </div>
        <Image
          alt="info stamp"
          src={'/images/stamps/stampMain.png'}
          width={500}
          height={500}
          className={`
            w-[50%] md:w-[30%]
          `}
        />
      </div>

      <p className="text-[14px] md:text-[18px] uppercase max-w-[750px] text-justify">{text}</p>
    </div>
  );
}