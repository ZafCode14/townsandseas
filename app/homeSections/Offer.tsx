import Image from "next/image";

export default function Offer() {
  return (
    <section className={`text-[#F9EFE8] bg-[#636D46] flex justify-center py-10 lg:py-24 w-full max-w-full px-5`}>
      <div className="w-[1300px] max-w-full flex flex-col">
        
        {/** Top part of the section */}
        <div className={`flex justify-between`}>
          <h2 className="text-[32px] sm:text-[50px] md:text-[60px] lg:text-[90px]">What we offer?</h2>
          <Image
            alt="footer logo"
            src={'/icons/logo3.svg'}
            width={0}
            height={0}
            className={`w-[80px] md:w-[110px] h-auto`}
          />
        </div>

        {/** Lower part of the section */}
        <div className={`flex flex-col lg:flex-row justify-between md:mt-10 lg:mt-24`}>
          <p className={`
            text-[16px] leading-[32px] 
            md:text-[18px] md:leading-[36px] 
            lg:text-[20px] lg:leading-[40px] 
            xl:text-[24px] xl:leading-[44px] 
            lg:ml-20
            mb-10 lg:mb-0
          `}>CULTARALLY INFUSED DESIGN <br/>ARCHITECTURAL INNOVATION <br/>GLOBAL INSPIRATION</p>
          <p className={`
            w-full lg:w-[500px] xl:w-[730px] max-w-full text-[14px] md:text-[16px] lg:text-[14px] xl:text-[18px] uppercase
          `}>We offer more than just buildings—we create environments that bring together culture, comfort, and modern design. Our projects are crafted to reflect the rich cultural heritage of their surroundings, honoring tradition while providing modern, inspiring spaces that nurture a sense of belonging.</p>
        </div>

      </div>
    </section>
  );
}