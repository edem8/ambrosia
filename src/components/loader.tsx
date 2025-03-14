"use client";

import useRadius from "@/hooks/useRadius";
import { cn } from "@/lib/utils";

export interface CircularTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function Spinner({ children, className }: CircularTextProps) {
  const { radius } = useRadius();
  const text = String(children);

  const size = radius;

  return (
    <div
      className={cn(
        "relative animate-spin-10 text-xs font-semibold sm:font-extrabold sm:text-xl",
        className
      )}
      style={{ width: size, height: size }}
    >
      <div className="w-full h-full absolute">
        {text?.split("").map((char, index) => {
          const angle = (index / text?.length) * 360;

          return (
            <div
              key={index}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `rotate(${angle}deg)`,
              }}
            >
              <span
                style={{
                  position: "absolute",
                  transform: `translate(-50%, -50%) rotate(0deg)`,
                  transformOrigin: "center",
                  left: 0,
                  top: `-${radius / 1.8}px`,
                }}
              >
                {char}
              </span>
            </div>
          );
        })}
      </div>
      <div className={cn("w-full h-full rounded-full")}></div>
    </div>
  );
}
