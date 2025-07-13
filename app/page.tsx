"use client";

import localFont from "next/font/local";
import { motion } from "framer-motion";

import ThinkerSection from "../components/ThinkerSection";
import Hero from "../components/Hero";
import Card from "../components/card"
import GradientButton from "../components/GradientButton";

const kugileFont = localFont({
  src: "/fonts/Kugile.woff",
});

export default function Home() {
  return (
    <main>
      <div className="bg-[#FFFFFF] flex flex-col items-center justify-center">
        <ThinkerSection kugileFont={kugileFont} />

        <motion.div
          className="mt-[60px] md:mt-[500px]"
          initial={{ filter: "blur(20px)", y: 60 }}
          whileInView={{ filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <Hero />
        </motion.div>
      </div>
      <div className="flex justify-center items-center">
      <GradientButton text="See all" href="/get-started" />
    </div>
      <div className="flex items-center justify-center min-h-screen">
        
      <Card
        title="Deploy with Confidence"
        description="Our team develops custom AI systems built around your goals, ensuring safe and reliable deployment."
        imageSrc="/CLAWS.png" // Put this in /public/images
        index="01"
      />
      
    </div>
    <div className="flex justify-center items-center">
      <GradientButton text="See all" href="/get-started" />
    </div>
    </main>
  );
}
