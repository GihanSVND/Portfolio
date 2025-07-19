"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import localFont from "next/font/local";

const satoshi = localFont({
  src: "../app/fonts/Satoshi.woff",
})

const quote =
  "I CREATE EXPERIENCES THAT FEEL RIGHT, MAKE SENSE, AND TRULY CONNECT WITH PEOPLE.";

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
  visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const QuoteReveal = () => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const words = quote.split(" ");

  return (
    <div className="px-8 sm:px-10 md:px-[120px] max-w-[1300px]">
    <motion.p
      ref={ref}
      className={` text-[32px] md:text-[43px] leading-[45px] -tracking-[0.02em]  text-[#1F1F1F] sm:mr-[300px] text-left  font-normal  ${satoshi.className}`}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {words.map((word, i) => (
        <motion.span key={i} className="inline-block mr-2" variants={wordVariants}>
          {word}
        </motion.span>
      ))}
    </motion.p>
    </div>
  );
};

export default QuoteReveal;
