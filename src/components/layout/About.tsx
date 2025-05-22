import React from "react";

export default function About() {
  return (
    <div className="w-full gap-4  py-8  text-center flex flex-col items-center">
      <h1 className="font-[Bellefair] title tracking-wide">ABOUT</h1>
      <div className="py-1  w-full px-6 sm:w-[80%] md:w-[70%] lg:w-[60%]  xl:w-[46.5%]  ">
        <p className="  tiny tracking-wide ">
        {/* <span className="tracking-widest cursor-pointer pb-1  text-gray-600 text-lg font-[High-Summit] ">agathamabrose@gmail.com</span><br /> */}
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
      </div>
    </div>
  );
}
