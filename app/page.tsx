"use client";

import localFont from "next/font/local";

import ThinkerSection from "../components/ThinkerSection";
import Hero from "../components/Hero";
import GradientButton from "../components/GradientButton";
import ProjectGrid from "../components/ProjectGrid";
import StatissticSection from "../components/StatisticSection";
import ClientBenefits from "../components/ClientBenefits";
import QuoteReveal from "../components/QuoteReveal";
import Scrollingskills from "../components/ScrollingSkills";
import Sophiecard from "../components/SophieCard";

const kugileFont = localFont({
  src: "/fonts/Kugile.woff",
});

export default function Home() {
  return (
    <main>
      <div className="px-3 bg-[#F0F0F0]  ">
        <div className=" flex flex-col items-center justify-center ">
          <ThinkerSection kugileFont={kugileFont} />

          <div className="mt-[60px] md:mt-[500px]">
            <Hero />
          </div>
        </div>
<div className="py-[50px] sm:py-[100px] md:py-[200px]" >
        <div className="flex items-center justify-center  ">
          <ProjectGrid />
        </div>
        <div className="flex items-center justify-center ">
          <GradientButton text="See all" href="/get-started" />
        </div>
        </div>
        <div className="flex items-center justify-center py-[30px]">
          <ClientBenefits />
        </div>
        <div className="flex items-center justify-center py-[30px]">
          <QuoteReveal />
        </div>
        <div className="flex justify-center items-center py-[30px]">
          <StatissticSection />
        </div>
        <div className="flex items-center justify-center py-[30px] ">
          <Scrollingskills />
        </div>
        <div className="flex items-center justify-center py-[50px] sm:py-[100px] md:py-[200px]">
          <Sophiecard />
        </div>
      </div>
    </main>
  );
}
