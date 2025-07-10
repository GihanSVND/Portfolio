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
      <div className="bg-[#FFFFFF] flex flex-col items-center justify-center ">
        <ThinkerSection kugileFont={kugileFont} />
        
        
        
        
        
      </div>
    </main>
  );
}
