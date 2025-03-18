"use client";
import { ProjectPage } from "@/lib/types";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

type Props = {
  projectPage: ProjectPage;
};
export default function Hero({ projectPage }: Props) {
  const searchParams = useSearchParams();
  const validCategories = ["residential", "coastal", "admin", "commercial"] as const;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const search = (validCategories.includes(searchParams.get("category") as any)
    ? (searchParams.get("category") as "residential" | "coastal" | "admin" | "commercial")
    : "residential"); // Default to "residential" if invalid

  const project = projectPage;

  if (!project) return;

  return (
    <div className={`w-full h-screen overflow-hidden relative flex justify-center items-center`}>
      <Image
        alt="hero image"
        src={project[search].hero.fileUrl || "/images/noImage.svg"}
        width={3000}
        height={3000}
        className="w-full h-full object-cover absolute"
      />
      <h1 className={`relative text-[70px] md:text-[100px] lowercase`}>{search}</h1>
    </div>
  );
}