"use client";

import Card from "../components/card";
import localFont from "next/font/local";

const satoshi = localFont({
  src: "../app/fonts/Satoshi.woff",
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
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-16">
      {/* Heading section */}
      <div className="text-center mb-12">
        <p className={`${satoshi.className} text-sm text-black flex justify-center items-center gap-2 font-semibold `}>
          <span className="w-2 h-2 bg-black rounded-full inline-block"></span>
          My Projects
        </p>
        <h2 className={`${satoshi.className} text-2xl md:text-[45px] leading-snug mt-3 font-semibold`}>
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
