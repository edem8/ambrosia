"use client";
import About from "@/components/layout/About";
import Onboarding from "@/components/layout/Onboarding";
import toast from "@/components/toast";
import React, { useEffect } from "react";

export default function Portfolio() {
  useEffect(() => {
    const interval = setInterval(() => {
      toast({
        title: "SHOP",
        description:
          " Amber Sky—opens with bold cinnamon and saffron, enveloping you in a warm golden glow",
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen gap-10 ">
      <Onboarding />
      <About />
    </div>
  );
}
