import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

// CSS for custom cursor
const customCursorStyle = `
  * {
    cursor: url('/cs.png'), auto !important;
  }
`;

interface ThinkerSectionProps {
  kugileFont: {
    className: string;
  };
}

const ThinkerSection: React.FC<ThinkerSectionProps> = ({ kugileFont }) => {
  const [isHovering, setIsHovering] = useState(false);

  // Add custom cursor effect when component mounts
  useEffect(() => {
    // Add style element for custom cursor
    const styleElement = document.createElement('style');
    styleElement.innerHTML = customCursorStyle;
    document.head.appendChild(styleElement);

    // Clean up when component unmounts
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <section className="flex flex-col items-center justify-center py-16 px-4 bg-[#f5f5f0] min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        {/* THINKER heading */}
        <motion.h1 
          className={`${kugileFont.className} text-8xl text-[#2a0e04] md:text-9xl lg:text-[15rem] leading-none mb-8 tracking-tighter`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          THINKER
        </motion.h1>
        
        {/* Portrait frame with hover effect */}
        <motion.div 
          className="relative inline-block mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.div 
            className="relative inline-block"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* The ornate frame and portrait */}
            <Image 
              src={isHovering ? "/thinker1.png" : "/thinker.png"}
              alt="Thinker portrait in ornate gold frame" 
              width={560}
              height={844}
              className="max-w-full h-auto transition-opacity duration-300"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Designer name */}
        <motion.h2 
          className={`${kugileFont.className} text-3xl text-[#2a0e04] md:text-4xl mb-4`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          Gihan de Designer
        </motion.h2>
        
        {/* Description text */}
        <motion.p 
          className={`${playfair.className} text-base text-[#2a0e04] md:text-lg max-w-xl mx-auto mb-8`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          The pioneer who build the future. He enjoy creating delightful, human centered digital experiences.
        </motion.p>
        
        {/* Summon button */}
        <motion.button 
          className={`${playfair.className} bg-[#2a0e04] text-[#f5f5f0] px-6 py-2 rounded-md hover:bg-[#3a2f25] transition-colors duration-300`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          - Summon him -
        </motion.button>
      </div>
    </section>
  );
};

export default ThinkerSection;