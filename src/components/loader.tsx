"use client";
import { cn } from "@/lib/utils";

export interface CircularTextProps {
  className?: string;
}

export default function Spinner({ className }: CircularTextProps) {
  const text = "Agatha Ambrose - Product Manager - Creative - ";
  const textColor = "";
  const textOrientation = "outward";
  const direction = "clockwise";
  const size = 200;
  const speed = 10;
  const fontSize = 20;

  // Calculate radius based on size
  const radius = size / 2;

  const animationClass =
    direction === "clockwise"
      ? `animate-spin-${speed}`
      : `animate-spin-reverse-${speed}`;

  return (
    <div
      className={cn("relative ", animationClass, className)}
      style={{ width: size, height: size }}
    >
      <div className="w-full h-full absolute">
        {text.split("").map((char, index) => {
          const angle = (index / text.length) * 360;

          // Calculate rotation for different text orientations
          let charRotation = 0;
          if (textOrientation === "outward") {
            charRotation = 0; // Text points outward
          } else if (textOrientation === "inward") {
            charRotation = 180; // Text points inward
          } else if (textOrientation === "tangential") {
            charRotation = 90; // Text follows the circle tangentially
          }

          return (
            <div
              key={index}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `rotate(${angle}deg)`,
              }}
            >
              <span
                className={cn(textColor)}
                style={{
                  position: "absolute",
                  transform: `translate(-50%, -50%) rotate(${charRotation}deg)`,
                  transformOrigin: "center",
                  left: 0,
                  top: `-${radius}px`, // Position at the circle's radius
                  fontSize: `${fontSize}px`,
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
