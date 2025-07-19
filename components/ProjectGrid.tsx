"use client";

import Card from "../components/card";
import localFont from "next/font/local";

const satoshi = localFont({
  src: "../app/fonts/Satoshi.woff",
})

const satoshim = localFont({
  src: "../app/fonts/SatoshiMedium.woff",
})

const cardsData = [
  {
    title: "Deploy with Confidence",
    description:
      "Our team develops custom AI systems built around your goals, ensuring safe and reliable deployment.",
    imageSrc: "/CLAWS.png",
    index: "01",
  },
  // Repeat or dynamically load more cards below
];

const ProjectGrid = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 bg-[#F0F0F0]">
      {/* Heading section */}
      <div className="text-center mb-12 ">
        <p className={`${satoshi.className} text-sm text-[#1F1F1F] flex justify-center items-center gap-2 font-semibold `}>
          <span className="w-2 h-2 bg-[#1F1F1F] rounded-full inline-block"></span>
          My Projects
        </p>
        <h2 className={`${satoshim.className} text-2xl md:text-[45px] mt-3 text-[#1F1F1F] leading-[50px] -tracking-[0.02em]`}>
          Things that made <br /> for the future
        </h2>
      </div>

      {/* Grid section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card
            key={i}
            title={cardsData[0].title}
            description={cardsData[0].description}
            imageSrc={cardsData[0].imageSrc}
            index={`0${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
