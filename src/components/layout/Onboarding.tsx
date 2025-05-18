"use client";

import Image from "next/image";
import Line from "../line";
import Selector from "../carousel";
import { useEffect, useState } from "react";
import Navigation from "../nav";

export default function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const nextSlide = (id: number) => {
    setCurrentSlide(id);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 3 ? 1 : prevSlide + 1));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full  bg-neutral-800">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={`/assets/images/0${currentSlide}.jpeg`}
          alt="Background"
          fill
          priority
          className="object-cover"
          
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full flex-col justify-between ">
        <div className="flex-1">
          <Navigation />
        </div>

        <div className="flex flex-col gap-2 lg:gap-8 lg:px-15 p-8 xl:px-20 2xl:px-40  text-white">
          <Line />
          <Selector currentSlide={currentSlide} nextSlide={nextSlide} />
        </div>
      </div>
    </div>
  );
}
