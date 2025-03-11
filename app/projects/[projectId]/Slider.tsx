"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

type Props = {
  list: {
    fileUrl: string
  }[];
};

export default function Slider({ list }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = list.length;

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages); // Cycle through images
  };

  // Automatically change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 5000); // Change image every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalImages]); // Dependency on totalImages to restart the interval when the number of images changes

  // Function to handle manual navigation via circle buttons
  const handleCircleClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-full w-full overflow-hidden pt-18">
      {/* Image Carousel */}
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {list.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <Image
              alt={`hero image ${index + 1}`}
              src={image.fileUrl || "/images/noImage.svg"}
              width={3000}
              height={3000}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Circles */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {list.map((_, index) => (
          <button
            key={index}
            onClick={() => handleCircleClick(index)}
            className={`w-3 h-3 rounded-full bg-white ${
              currentIndex === index ? "bg-opacity-80" : "bg-opacity-50"
            } transition-colors`}
          />
        ))}
      </div>
    </div>
  );
}