"use client";


import localFont from "next/font/local";

import ThinkerSection from '../components/ThinkerSection';


const kugileFont = localFont({
  src: "/fonts/Kugile.woff",
});


export default function Home() {

  return (
    <main>
    <div className="bg-[#ECE8D5] ">
      <ThinkerSection kugileFont={kugileFont} />
    </div>
    </main>
  );
}
