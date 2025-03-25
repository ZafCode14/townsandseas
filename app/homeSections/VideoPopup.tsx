"use client";

import { useState } from "react";

type Props = {
  video: string;
};

export default function VideoPopup({ video }: Props) {
  const [show, setShow] = useState(true);
  if (!video) {
    return null;
  }
  return (
    <div onClick={() => setShow(false)} className={`
      ${show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      fixed top-0 right-0 z-20 
      w-full h-full bg-[#0000008e] 
      flex justify-center items-center
      duration-300
    `}>
      <div className="w-[90vw] h-[55vw] bg-[black]">
        <video src={video} autoPlay loop muted className="w-full h-full object-cover" />
      </div>
    </div>
  );
}