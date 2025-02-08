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
    <section className="h-[400px] md:h-[700px] lg:h-screen w-full overflow-hidden">
      <div
        className="flex w-full h-full transition-transform duration-[2s] ease-in-out"
        style={{
          transform: `translateX(-${index * 100}%)`, // Move images left
        }}
      >
        {list.map((el, i) => (
          <Image
            key={i}
            alt="hero image"
            src={`/images/${el}.jpg`}
            width={3000}
            height={3000}
            className="min-w-full h-full object-cover"
          />
        ))}
      </div>
    </section>
  );
}