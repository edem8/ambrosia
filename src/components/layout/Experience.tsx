"use client";

import { useState, useEffect, useRef } from "react";
import { experienceData } from "@/lib/data";

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const experienceContainerRef = useRef<HTMLDivElement>(null);
  const firstItemRef = useRef<HTMLDivElement>(null);
  const lastItemRef = useRef<HTMLDivElement>(null);
  const [leftPadding, setLeftPadding] = useState(0);
  const [rightPadding, setRightPadding] = useState(0);

  const handleExperienceChange = (index: number) => {
    if (index === activeIndex) return;

    setActiveIndex(index);
    setIsAnimating(true);
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  // Set dynamic left and right padding based on first and last item
  useEffect(() => {
    const container = experienceContainerRef.current;
    const firstItem = firstItemRef.current;
    const lastItem = lastItemRef.current;

    if (container && firstItem && lastItem) {
      const containerWidth = container.offsetWidth;
      const left = containerWidth / 2 - firstItem.offsetWidth / 2;
      const right = containerWidth / 2 - lastItem.offsetWidth / 2;
      setLeftPadding(left);
      setRightPadding(right);
    }
  }, []);

  // Scroll active item into center view
  useEffect(() => {
    const container = experienceContainerRef.current;
    const items = container?.querySelectorAll(".year-item");
    const activeItem = items?.[activeIndex] as HTMLElement;

    if (container && activeItem) {
      requestAnimationFrame(() => {
        const containerWidth = container.offsetWidth;
        const itemLeft = activeItem.offsetLeft;
        const itemWidth = activeItem.offsetWidth;

        const scrollTo = itemLeft - containerWidth / 2 + itemWidth / 2;

        container.scrollTo({
          left: scrollTo,
          behavior: "smooth",
        });
      });
    }
  }, [activeIndex]);

  return (
    <div className="w-full px-10 md:px-35 lg:px-12 xl:px-24 lg:py-8  ">
      <div className="place-self-center flex items-center space-x-15 md:space-x-20 pl:10 md:px-6  tracking-widest text-gray-300 mb-10 md:mb-20 text-xs md:text-base">
        <p className="cursor-pointer pb-1 border-b ">Work</p>
        <p className="cursor-pointer pb-1 border-b">Projects</p>
      </div>
      <div className="relative  ">
        {/* Experience scrolling container */}
        <div
          ref={experienceContainerRef}
          className="w-full overflow-x-hidden relative"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div
            className="flex items-center lg:py-8 lg:px-4  space-x-6 lg:space-x-35 w-max"
            style={{
              paddingLeft: `${leftPadding}px`,
              paddingRight: `${rightPadding}px`,
            }}
          >
            {experienceData.map((item, index) => (
              <div
                key={item.period}
                ref={
                  index === 0
                    ? firstItemRef
                    : index === experienceData.length - 1
                    ? lastItemRef
                    : null
                }
                className={`year-item  transition-all  duration-500 cursor-pointer ${
                  index === activeIndex
                    ? "text-black lg:scale-130 opacity-100"
                    : "text-gray-200 lg:scale-90 opacity-45"
                }`}
                onClick={() => handleExperienceChange(index)}
              >
                <div>
                  <h1 className="font-[Bellefair]  text-[35px] md:text-[58px] lg:text-[90px] text-center md:leading-20 lg:leading-30">
                    {item.title}
                  </h1>
                  <p className="  text-[8px] md:text-[11px] md:leading-5 lg:text-xs text-center  tracking-wide   lg:leading-5">
                    {item.period}
                  </p>
                  <p className="  text-[8px] md:text-[11px] md:leading-5 lg:text-xs text-center  tracking-wide  lg:leading-8">
                    {item.role.toLocaleUpperCase()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
