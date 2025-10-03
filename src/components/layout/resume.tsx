import { Folder, Instagram, Link, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import React from "react";
import { BsArrowsVertical } from "react-icons/bs";

export default function Resume() {
  return (
    <div className="py-4 xl:px-70 container mx-auto ">
      <div className="grid grid-cols-3 items-center gap-8 mb-4  justify-between">
        <p className="text-sm col-span-2 text-gray-400 tracking-wide flex items-center gap-1">
          {" "}
          <Folder size={20} /> <span>apps</span>{" "}
        </p>
        <p className="text-sm text-gray-400 tracking-wide "> contact</p>
      </div>
      <div className="grid grid-cols-3 items-start gap-8 justify-around">
        <div className="  col-span-2">
          <p className="text-gray-800 tiny tracking-wide">
            {/* A <span className="text-[#ea1d61]">product manager</span> who
            thrives at the intersection of design, engineering, and business —
            turning complex challenges into intuitive, user-centered solutions.
            I lead with structure and flexibility—aligning teams, adapting to
            shifting priorities, and driving impact. I don’t just ship features;
            I build scalable strategies rooted in data, research, and human
            behavior. At my <span className="text-[#ea1d61]">core</span>,
            product management is about alignment, bold decisions, and improving
            everything */}
          </p>

          <p className="text-sm col-span-2 text-gray-400 tracking-wide flex items-center gap-1 ">
            <Folder size={20} /> <span>packages</span>{" "}
          </p>
          <p className="text-sm col-span-2 text-gray-400 tracking-wide flex items-center gap-1 mt-4">
            <Folder size={20} /> <span>tools</span>{" "}
          </p>
          <p className="text-sm col-span-2 text-gray-400 tracking-wide flex items-center gap-1 mt-4">
            <Folder size={20} /> <span>models</span>{" "}
          </p>
        </div>

        <div className="space-y-2 ">
          <p className="text-[#ea1d61] flex items-center gap-1 tiny cursor-pointer">
            <span>Resume</span> <Link size={18} />
          </p>
          <p className="cursor-pointer hover:underline hover:text-gray-500">info@agathaambrosia.com</p>
          <Instagram
            size={22}
            className="hover:text-[#ea1d61] cursor-pointer"
          />
          <Linkedin size={22} className="hover:text-[#ea1d61] cursor-pointer" />
          <Youtube size={22} className="hover:text-[#ea1d61] cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
