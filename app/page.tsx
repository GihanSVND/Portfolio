"use client";

import Image from "next/image";

import localFont from "next/font/local";

import ThinkerSection from "../components/ThinkerSection";

const kugileFont = localFont({
  src: "/fonts/Kugile.woff",
});

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
        <h1 className={`${kugileFont.className} text-4xl text-[#2a0e04] md:text-5xl mb-4`}> - His Journey - </h1>
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
