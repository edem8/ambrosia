"use client";
import About from "@/components/layout/about";
import Companies from "@/components/layout/companies";
import { Experience } from "@/components/layout/experience";
import Onboarding from "@/components/layout/onboarding";
import Recents from "@/components/layout/recents";
import Resume from "@/components/layout/resume";
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
    <div className="flex flex-col items-center  justify-center min-h-screen gap-10 ">
      <Onboarding />
      <div className="flex items-center justify-between container px-100 ">
        <Recents />
      </div>
      <Companies />
      <Resume />
    </div>
  );
}
