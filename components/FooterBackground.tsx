"use client";
import { usePathname } from "next/navigation";

export default function FooterBackground() {
  const p = usePathname();
  return (
    <div className={`
      w-full h-full absolute right-0 top-0 
      ${p === "/about" ? "bg-[#636D46]" : "bg-[#B54D2C]"}
    `}></div>
  );
}