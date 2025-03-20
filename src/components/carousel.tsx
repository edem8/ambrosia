import { ChevronRight } from "lucide-react";
import React, { useState } from "react";

interface SelectorProps{
  nextSlide: (id: number) => void
}

export default function Selector({nextSlide}:SelectorProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 3;

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides ? 1 : prev + 1));
    nextSlide(currentSlide)
  };
  return (
    <div className="flex items-center justify-between">
      <div className="text-sm font-[Grotesk]">
        {currentSlide} <span className="mx-1">/</span> {totalSlides}
      </div>
      <div className="flex items-center gap-1">
        <div className="w-24 h-px bg-white/70"></div>

        <button onClick={handleNextSlide} className="p-2 cursor-pointer">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
