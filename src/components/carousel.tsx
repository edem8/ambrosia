import { ChevronRight } from "lucide-react";
import React from "react";

interface SelectorProps {
  nextSlide: (id: number) => void;
  currentSlide: number;
}

export default function Selector({ currentSlide, nextSlide }: SelectorProps) {
  const totalSlides = 3;

  const handleNextSlide = () => {
    const newSlide = currentSlide === totalSlides ? 1 : currentSlide + 1;

    nextSlide(newSlide);
  };
  return (
    <div className="flex items-center justify-between">
      <div className="text-sm md:text-xs font-[Grotesk]">
        {currentSlide} <span className="mx-1">/</span> {totalSlides}
      </div>
      <div className="flex items-center gap-1">
        <div className="w-24 h-px bg-white"></div>

        <button onClick={handleNextSlide} className="p-2  cursor-pointer">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
