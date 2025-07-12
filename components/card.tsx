// components/Card.tsx
import Image from "next/image";
import { FC } from "react";

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  index: string;
}

const Card: FC<CardProps> = ({ title, description, imageSrc, imageAlt = "", index }) => {
  return (
    <div className="relative rounded-2xl bg-[#F8F8F8] p-5 w-full max-w-md shadow-[0_4px_8px_rgba(0,0,0,0.15)] overflow-hidden">
      {/* Inner white top shadow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:h-[20px] after:rounded-t-3xl after:shadow-[inset_0_4px_2px_rgba(255,255,255,1)]"></div>

      {/* Top Icon */}
      <div className="flex items-start justify-between">
        <div className="w-6 h-6 bg-black text-white flex items-center justify-center rounded-md shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h4a1 1 0 011 1v9a1 1 0 01-1 1h-9a1 1 0 01-1-1v-4m0-4L16 16" />
          </svg>
        </div>
      </div>

      {/* Title & Description */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold font-['Inter'] text-black">{title}</h2>
        <p className="text-sm text-gray-600 mt-1 font-['Inter']">{description}</p>
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
  );
};

export default Card;
