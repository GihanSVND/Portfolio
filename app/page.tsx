"use client";

import Image from "next/image";


import localFont from "next/font/local";

import ThinkerSection from "../components/ThinkerSection";
import InfiniteCarousel from '@/components/InfiniteCarousel';

const kugileFont = localFont({
  src: "/fonts/Kugile.woff",
});

const cardData = [
  {
    id: 1,
    thumbImage: "/Thumb.png",
    title: "SOCS - Official Website",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    link: "https://example.com/link3"
  },
  {
    id: 2,
    thumbImage: "/Thumb.png",
    title: "SOCS",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    link: "https://example.com/link3"
  },
  {
    id: 3,
    thumbImage: "/Thumb.png",
    title: "SOCS - Official Website",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    link: "https://example.com/link3"
  },
  // Add more cards...
];

export default function Home() {
  return (
    <main>
      <div className="bg-[#ECE8D5] flex flex-col items-center justify-center ">
        <ThinkerSection kugileFont={kugileFont} />
        
        
        <Image
          src={"/book.png"}
          alt="Thinker portrait in ornate gold frame"
          width={1175}
          height={1175}
          className="max-w-full h-auto transition-opacity duration-300"
          priority
        />
        
        <InfiniteCarousel cards={cardData} speed={30} gap={24} />
        <h1
          className={`${kugileFont.className} text-4xl text-[#2a0e04] md:text-5xl mb-4`}
        >
          
          {" "}
          - His Journey -{" "}
        </h1>
        <Image
          src={"/map.png"}
          alt="Thinker portrait in ornate gold frame"
          width={1000}
          height={1000}
          className="max-w-full h-auto transition-opacity duration-300"
          priority
        />
      </div>
    </main>
  );
}
