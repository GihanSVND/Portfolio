import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ThinkerSectionProps {
  kugileFont: {
    className: string;
  };
}

const ThinkerSection: React.FC<ThinkerSectionProps> = ({ kugileFont }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="relative flex flex-col items-center justify-center py-16 px-4 bg-[#FFFFFF] ">
      <div className="relative max-w-6xl mx-auto flex flex-col items-center justify-center">
        {/* Image above the text with higher z-index */}
        <div className="absolute top-1/2 -translate-y-1/8 z-20">
          <Image
            src="/Statue.png"
            alt="Thinker portrait in ornate gold frame"
            width={739}
            height={923}
            className="max-w-full h-auto mx-auto"
            priority
          />
        </div>

        {/* THINKER heading with lower z-index */}
        <motion.h1
          className={`${kugileFont.className} text-7xl  text-[#000000] md:text-9xl lg:text-[15rem] leading-none mt-8 -mb-2 tracking-tighter z-10`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          THINKER
        </motion.h1>
      </div>
    </section>
  );
};

export default ThinkerSection;
