"use client";

import {
  RocketLaunchIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

import localFont from "next/font/local";
import { motion } from "framer-motion";

const satoshim = localFont({
  src: "../app/fonts/SatoshiMedium.woff",
});

const benefits = [
  {
    icon: RocketLaunchIcon,
    title: "Rapid delivery",
    description:
      "Get your product to market faster with streamlined design processes and efficient turnaround times.",
  },
  {
    icon: SparklesIcon,
    title: "Tailored UI/UX",
    description:
      "Receive uniquely crafted experiences that align with your brand identity and user expectations.",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Scalable design systems",
    description:
      "I build reusable design systems that grow with your business and support new features seamlessly.",
  },
  {
    icon: CurrencyDollarIcon,
    title: "Fixed pricing",
    description:
      "Transparent and consistent pricing lets you budget with confidence and avoid unexpected costs.",
  },
];

const ClientBenefits = () => {
  return (
    <section className="py-20 px-8 sm:px-10 md:px-[190px]">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-left mb-16">
          <p
            className={`text-black flex items-center gap-2 text-sm ${satoshim.className}`}
          >
            <span className="w-2 h-2 rounded-full bg-black inline-block" />
            What my clients get
          </p>
          <h2
            className={`text-4xl md:text-5xl font-medium mt-4 ${satoshim.className}`}
          >
            Benefits
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ filter: "blur(20px)", y: 60 }}
                whileInView={{ filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
              >
                {/* Styled Icon */}
                <div className="mb-4 flex items-start justify-between">
                  <div className="w-[40px] h-[40px] bg-gradient-to-b from-[#4A4A4A] via-[#2d2d2d] to-black text-white flex items-center justify-center rounded-xl shadow-md">
                    <IconComponent className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title and Description */}
                <h3
                  className={`text-lg text-black mb-2 ${satoshim.className} font-black`}
                >
                  {benefit.title}
                </h3>
                <p
                  className={`text-gray-500 text-sm leading-relaxed ${satoshim.className}`}
                >
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientBenefits;
