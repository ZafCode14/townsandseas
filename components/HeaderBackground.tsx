"use client"; // Ensure it's a Client Component in Next.js App Router

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function HeaderBackground() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    scrollTo(0, 0);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const p = usePathname();

  return (
    <div
      className={`absolute right-0 top-0 w-full h-full transition-colors duration-300 ${
        isScrolled ? "bg-[#B54D2C]" : p !== "/" ? "bg-[#B54D2C]" : "bg-transparent"
      }`}
    ></div>
  );
}