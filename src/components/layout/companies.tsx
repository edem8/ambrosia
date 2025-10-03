import Image from "next/image";
import React from "react";

export default function Companies() {
  return (
    <div className="py-10  ">
      <p className="text-gray-400 tiny mb-4"> companies I've worked with</p>
      <div className="flex items-center gap-20">
        <Image
          src={`/assets/logos/duo.png`}
          alt="Background"
          width={180}
          height={180}
          priority
          className=""
        />

        <Image
          src={`/assets/logos/retool.png`}
          alt="Background"
          width={80}
          height={80}
          priority
          className=""
        />

        <Image
          src={`/assets/logos/omni.png`}
          alt="Background"
          width={120}
          height={120}
          priority
          className=""
        />
      </div>
    </div>
  );
}
