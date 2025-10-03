import React from "react";

export default function About() {
  return (
    <div className="w-full gap-4   px-4  ">
      <h1 className=" title tracking-wide mb-2 "> </h1>
      <div className="py-1  w-full   ">
        <p className="text-gray-800 tiny tracking-wide">
          A product manager who thrives at the intersection of{" "}
          <span className="text-[#ea1d61]">
            design, engineering, and business
          </span>
          — turning complex challenges into intuitive, user-centered solutions.
          I lead with structure and flexibility—aligning teams, adapting to
          shifting priorities, and driving impact. I don’t just ship features; I
          build scalable strategies rooted in data, research, and human
          behavior. At my <span className="text-[#ea1d61]">core</span>, product
          management is about alignment, bold decisions, and improving
          everything
        </p>
      </div>
    </div>
  );
}
