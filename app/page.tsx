"use client";

import localFont from "next/font/local";
import { motion } from "framer-motion";

import ThinkerSection from "../components/ThinkerSection";
import Hero from "../components/Hero";
import GradientButton from "../components/GradientButton";
import ProjectGrid from "../components/ProjectGrid";
import StatissticSection from "../components/StatisticSection";
import ClientBenefits from "../components/ClientBenefits";
import QuoteReveal from "../components/QuoteReveal";

const kugileFont = localFont({
  src: "/fonts/Kugile.woff",
});

export default function Home() {
  return (
    <main>
      <div className="px-3 bg-[#F0F0F0]  ">
        <div className=" flex flex-col items-center justify-center ">
          <ThinkerSection kugileFont={kugileFont} />

          <motion.div
            className="mt-[60px] md:mt-[500px]"
            initial={{ filter: "blur(20px)", y: 60 }}
            whileInView={{ filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <Hero />
          </motion.div>
        </div>

        <div className="flex items-center justify-center min-h-screen">
          <ProjectGrid />
        </div>
        <div className="flex items-center justify-center ">
          <GradientButton text="See all" href="/get-started" />
        </div>
        <div className="flex items-center justify-center ">
         
          <ClientBenefits />
          
        </div>
        <div className="flex">
          <QuoteReveal />
        </div>
        <div className="flex justify-center items-center">
          <StatissticSection />
        </div>
      </div>
    </main>
  );
}
