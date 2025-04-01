import React from "react";
import Spinner from "../spinner";

export default function About() {
  return (
    <div className="w-full gap-4  py-10 xl:py-18 text-center flex flex-col items-center">
      <h1 className="font-[Bellefair] text-3xl sm:text-4xl md:text-5xl tracking-wide">
        ABOUT
      </h1>
      <div className="py-1  w-full px-6 sm:w-[80%] md:w-[70%] lg:w-[60%]  xl:w-[47%]  ">
        <p className="  tiny tracking-wide ">
          A product manager who thrives at the intersection of design,
          engineering, and business—turning complex problems into intuitive,
          user-focused solutions. Whether leading cross-functional teams,
          navigating shifting priorities, or breaking down intricate details, I
          bring a structured yet flexible approach to delivering impact. I don’t
          just build products; I build strategies that scale, informed by data,
          research, and a deep understanding of human behavior. At my core, I
          believe product management isn’t just about features—it’s about
          fostering alignment, making bold decisions, and leaving things better
          than I found them.
        </p>
        <Spinner>Agatha Ambrose - Product Manager - Limitless - </Spinner>
      </div>
    </div>
  );
}
