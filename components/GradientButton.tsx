"use client";

import Link from "next/link";
import { FC } from "react";

interface GradientButtonProps {
  text: string;
  href: string;
  external?: boolean;
}

const GradientButton: FC<GradientButtonProps> = ({
  text,
  href,
  external = false,
}) => {
  const buttonContent = (
    <button className="w-[233px] h-[73px] rounded-[36px] bg-gradient-to-b from-[#4A4A4A] via-[#2d2d2d] to-black text-white text-lg font-medium flex items-center justify-center gap-3 hover:scale-105 transition-transform duration-300 shadow-[8px_7px_14.2px_rgba(0,0,0,0.32)]">
      <span>{text}</span>
      {/* Right arrow icon (SVG) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
        />
      </svg>
    </button>
  );

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {buttonContent}
    </a>
  ) : (
    <Link href={href}>{buttonContent}</Link>
  );
};

export default GradientButton;
