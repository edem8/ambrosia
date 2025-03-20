"use client";

import Image from "next/image";
import Navigation from "../nav";

export default function PortfolioPage() {
  return (
    <div className="relative h-screen w-full  bg-neutral-800">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={"/assets/images/03`.jpeg"}
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full flex-col justify-between p-6 text-white">
        {/* Header */}
        <Navigation />

        {/* Divider */}
        {/* <div className="w-full h-px bg-white/70 my-4"></div> */}

        {/* Empty middle section */}
        {/* <div className="flex-1"></div> */}

        {/* Footer */}
        <div>
          {/* Divider */}
          {/* <div className="w-full h-px bg-white/70 mb-8"></div> */}

          {/* Navigation */}
          {/* <div className="flex items-center justify-between">
            <div className="text-sm">
              {currentSlide} <span className="mx-2">/</span> {totalSlides}
            </div>
            <div className="flex items-center gap-8">
              <div className="w-24 h-px bg-white/70"></div>
              <button onClick={nextSlide} className="p-2">
                <ChevronRight size={24} />
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
