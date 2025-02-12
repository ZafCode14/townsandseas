import Image from "next/image";

export default function ProjectsPage() {
  return (
    <main className="h-screen w-full relative flex justify-center items-center text-[#F9EFE8]">
      <Image
        alt="hero image"
        src={'/images/launchingSoon.jpg'}
        width={3000}
        height={3000}
        className="w-full h-full object-cover absolute top-0 right-0"
      />
      <div className="relative flex flex-col items-center">
        <p className="underline text-[12px]">OUR PROJECTS</p>
        <h1 className="text-[50px] md:text-[90px] lg:text-[120px] xl:text-[150px]">launching soon</h1>
        <p className="text-[20px] md:text-[40px]">STAY TUNED</p>
      </div>

      <Image
        alt="middle stamp"
        src={'/images/stamps/launchingMiddleStamp.png'}
        width={1000}
        height={1000}
        className="h-[100px] md:h-[175px] lg:h-[250px] w-auto object-contain absolute bottom-10 right-[20%]"
      />

      <Image
        alt="right stamp"
        src={'/images/stamps/launchingRightStamp.png'}
        width={1000}
        height={1000}
        className="h-[100px] md:h-[175px] lg:h-[250px] w-auto object-contain absolute right-5 top-[30%]"
      />

      <Image
        alt="Left stamp"
        src={'/images/stamps/launchingLeftStamp.png'}
        width={1000}
        height={1000}
        className="h-[75px] md:h-[100px] lg:h-[150px] w-auto object-contain absolute left-5 bottom-[30%]"
      />
    </main>
  );
}