"use client";
import { ProjectPage } from "@/lib/types";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

type Props = {
  projectPage: ProjectPage;
};
export default function Hero({ projectPage }: Props) {
  const searchParams = useSearchParams();
  const search: string = searchParams.get("category") || "residential";

  const project = projectPage[search as keyof ProjectPage];

  return (
    <div className={`w-full h-screen overflow-hidden relative flex justify-center items-center`}>
      <Image
        alt="hero image"
        src={project?.fileUrl || "/images/noImage.svg"}
        width={3000}
        height={3000}
        className="w-full h-full object-cover absolute"
      />
      <h1 className={`relative text-[70px] md:text-[100px] lowercase`}>{search}</h1>
    </div>
  );
}