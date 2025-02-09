"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [index, setIndex] = useState<number>(0);
  const list = ["hero1", "hero2", "hero3", "hero4"];
  const interval = 5000;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % list.length);
    }, interval);

    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="relative h-[400px] md:h-[700px] lg:h-screen w-full overflow-hidden">
      {list.map((el, i) => (
        <Image
          key={i}
          priority
          alt="hero image"
          src={`/images/${el}.jpg`}
          width={3000}
          height={3000}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </section>
  );
}