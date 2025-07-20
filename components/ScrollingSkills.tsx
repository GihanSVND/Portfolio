"use client";

import { useEffect, useRef } from "react";
import localFont from "next/font/local";

const satoshi = localFont({
  src: "../app/fonts/Satoshi.woff",
})

const skills = [
  "UX Researcher", "UI Design", "Webflow", "Framer", "Interaction Design",
  "No-Code", "UX Writing", "Prototyping", "Product Strategy", "User Testing",
];

export default function ScrollingSkills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    const container = containerRef.current;

    const scroll = () => {
      if (container) {
        container.scrollLeft += 0.5; // adjust speed
        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth
        ) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative w-full max-w-[1100px] mx-auto overflow-hidden py-6">
      {/* Fade overlays */}
      <div className="pointer-events-none absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#F0F0F0] to-transparent z-10" />
      <div className="pointer-events-none absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#F0F0F0] to-transparent z-10" />

      <div
        ref={containerRef}
        className="flex gap-4 whitespace-nowrap overflow-hidden"
      >
        {[...skills, ...skills].map((skill, i) => (
          <span
            key={i}
            className={`bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm shrink-0 ${satoshi.className}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
