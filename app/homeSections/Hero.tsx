"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

type Props = {
  images: string[];
}
export default function Hero({ images }: Props) {
  const [index, setIndex] = useState<number>(0);
  const interval = 5000;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="relative h-[400px] md:h-[700px] lg:h-screen w-full overflow-hidden">
      {/* Visually hidden but SEO-visible heading */}
      <h1 className="sr-only">Towns And Seas</h1>

      {images.map((image, i) => (
        <Image
          key={i}
          priority
          alt="hero image"
          src={image}
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