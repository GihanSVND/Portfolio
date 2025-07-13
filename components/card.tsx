// components/Card.tsx
import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";

import localFont from "next/font/local";

const satoshi = localFont({
  src: "../app/fonts/Satoshi.woff",
});

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  index: string;
}

const Card: FC<CardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt = "",
  index,
}) => {
  return (
    <motion.div
            
            initial={{ filter: "blur(20px)", y: 60 }}
            whileInView={{ filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
    <div className="relative w-full sm:w-[300px] md:w-[450px] h-auto md:h-[490px] rounded-2xl bg-[#F8F8F8] p-5 shadow-[0_4px_8px_rgba(0,0,0,0.15)] overflow-hidden">
      {/* Inner white top shadow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:h-[20px] after:rounded-t-3xl after:shadow-[inset_0_4px_2px_rgba(255,255,255,1)]"></div>

      {/* Top Icon */}
      <div className="flex items-start justify-between">
        <div className="w-[40px] h-[40px]  bg-gradient-to-b from-[#4A4A4A] via-[#2d2d2d] to-black text-white flex items-center justify-center rounded-xl shadow-md">
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
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </div>
      </div>

      {/* Title & Description */}
      <div className={`mt-4 ${satoshi.className}`}>
        <h2 className="text-lg font-extrabold text-black">{title}</h2>
        <p className="text-sm text-gray-600 mt-1 ">{description}</p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-4"></div>

      {/* Index and dots */}
      <div className="flex items-center justify-between">
        <span className="text-3xl font-['Inter'] font-semibold">{index}</span>
        <div className="flex gap-1">
          <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
        </div>
      </div>

      {/* Image */}
      <div className="mt-4 overflow-hidden rounded-xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={500}
          height={300}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
    </motion.div>
  );
};

export default Card;
