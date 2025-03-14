"use client";

import { useEffect, useState } from "react";

export default function useRadius() {
  const [radius, setRadius] = useState<number>(100);

  useEffect(() => {
    const updateRadius = () => {
      const newRadius = window.innerWidth < 640 ? 100 : 190;
      setRadius(newRadius);
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);

    return () => {
      window.removeEventListener("resize", updateRadius);
    };
  }, []);
  return { radius };
}
