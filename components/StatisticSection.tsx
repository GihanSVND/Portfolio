"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import localFont from "next/font/local";

const ivy = localFont({
  src: "../app/fonts/Ivy.woff",
});


interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

const stats: Stat[] = [
  { label: "Finalized projects", value: 15, suffix: "+" },
  { label: "Years of Experiences", value: 7, suffix: "+" },
  { label: "Conversation rate improvement", value: 96, suffix: "%" },
];

const StatisticSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("stat-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const durations = stats.map((s) => 1000 + s.value * 10);
    const steps = 60;

    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, index) => {
          const target = stats[index].value;
          if (count >= target) return target;
          return +(count + target / steps).toFixed(1);
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, [hasAnimated]);

  return (
    <section id="stat-section" className="py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-left ">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h2 className={`text-[170px] font-bold text-black ${ivy.className}`}>
              {Math.round(counts[index])}
              {stat.suffix}
            </h2>
            <p className="text-gray-500 text-m -mt-[40px]">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatisticSection;
