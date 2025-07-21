"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";


const dynamicTitles = ["UI/UX DESIGNER", "3D ARTIST", "WEB DEVELOPER", "IOS DEVELOPER"];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, filter: "blur(6px)", y: 20 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const letterVariants = {
  hidden: { opacity: 0, x: -10, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const QuoteReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % dynamicTitles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const quoteWordsLine1 = [
    { text: "HEY I'M", gray: true },
    { text: "GIHAN.", gray: false },
  ];

  const quoteWordsLine2 = [
    { text: "I ENJOY CREATING", gray: true },
    { text: "HUMAN", gray: false },
    { text: "CENTERED", gray: false },
    { text: "DIGITAL EXPERIENCES.", gray: true },
  ];

  return (
    <div
      ref={ref}
      className={`pt-[200px] px-8 sm:px-10 md:px-[270px] max-w-[1300px] relative`}
    >
      <motion.div
        className={`text-[32px] md:text-[43px] leading-[45px] -tracking-[0.01em] text-left `}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Line 1 */}
        <div className="flex flex-wrap items-center relative z-10 ">
          {quoteWordsLine1.map((word, i) => {
            if (word.text === "GIHAN.") {
              return (
                <motion.span
                  key={i}
                  className="inline-flex items-center mr-2 text-[#1F1F1F] relative "
                  variants={wordVariants}
                >
                  {/* Hover-scaling image */}
                  <motion.div
                    className="relative flex items-center justify-center mr-2"
                    whileHover={{ scale: 3 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    style={{ transformOrigin: "center" }}
                  >
                    <motion.img
                      src="/gihan.png"
                      alt="Gihan"
                      className="h-[1em] w-auto object-cover rounded-full z-10"
                    />
                  </motion.div>
                  {word.text}
                </motion.span>
              );
            } else {
              return (
                <motion.span
                  key={i}
                  className={`inline-block mr-2 ${
                    word.gray ? "text-gray-400" : "text-[#1F1F1F]"
                  }`}
                  variants={wordVariants}
                >
                  {word.text}
                </motion.span>
              );
            }
          })}
        </div>

        {/* Dynamic Title (Animated per letter) */}
        <div className="mt-1 mb-2 flex flex-wrap overflow-hidden ">
          <AnimatePresence mode="wait">
            <motion.div
              key={dynamicTitles[currentTitleIndex]}
              className="flex flex-wrap"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.03,
                  },
                },
              }}
            >
              {dynamicTitles[currentTitleIndex].split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="text-[#1F1F1F]"
                  variants={letterVariants}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Line 2 */}
        <div className="flex flex-wrap">
          {quoteWordsLine2.map((word, i) => (
            <motion.span
              key={i}
              className={`inline-block mr-2 ${
                word.gray ? "text-gray-400" : "text-[#1F1F1F]"
              }`}
              variants={wordVariants}
            >
              {word.text}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default QuoteReveal;
