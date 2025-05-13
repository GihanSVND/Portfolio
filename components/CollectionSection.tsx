import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

interface CollectionItem {
  id: number;
  image: string;
  caption: string;
  url: string;
}

interface CollectionSectionProps {
  kugileFont: {
    className: string;
  };
  items?: CollectionItem[];
}

const defaultItems: CollectionItem[] = [
  {
    id: 1,
    image: "/collection1.png",
    caption: "SOCS - Official Website",
    url: "/collection/socs1"
  },
  {
    id: 2,
    image: "/collection2.png",
    caption: "SOCS - Official Website",
    url: "/collection/socs2"
  },
  {
    id: 3,
    image: "/collection3.png",
    caption: "SOCS - Official Website",
    url: "/collection/socs3"
  },
  {
    id: 4,
    image: "/collection4.png",
    caption: "SOCS - Official Website",
    url: "/collection/socs4"
  },
  {
    id: 5,
    image: "/collection5.png",
    caption: "SOCS - Official Website",
    url: "/collection/socs5"
  },
];

const CollectionSection: React.FC<CollectionSectionProps> = ({
  kugileFont,
  items = defaultItems
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [duplicatedItems, setDuplicatedItems] = useState<CollectionItem[]>([]);
  const [itemWidth, setItemWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Duplicate items for infinite scroll effect
  useEffect(() => {
    setDuplicatedItems([...items, ...items, ...items]);
  }, [items]);

  // Handle responsive sizing and detect mobile
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      
      // Calculate item width based on screen size
      const screenWidth = window.innerWidth;
      let newItemWidth;
      
      if (screenWidth < 640) {
        // Mobile - smaller size
        newItemWidth = Math.min(screenWidth * 0.8, 280);
      } else if (screenWidth < 1024) {
        // Tablet
        newItemWidth = Math.min(screenWidth * 0.4, 350);
      } else {
        // Desktop
        newItemWidth = Math.min(screenWidth * 0.25, 380);
      }
      
      setItemWidth(newItemWidth);
    };

    // Set initial size
    handleResize();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Infinite scroll animation
  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement || duplicatedItems.length === 0 || !itemWidth) return;

    const gapSize = isMobile ? 16 : 24; // 4rem on desktop, 1rem on mobile
    const totalOriginalWidth = (itemWidth + gapSize) * items.length;

    let scrollPosition = 0;
    let requestId: number;

    const scroll = () => {
      if (!scrollElement) return;

      scrollPosition += 0.5;

      if (scrollPosition >= totalOriginalWidth) {
        scrollPosition = 0;
      }

      scrollElement.style.transform = `translateX(-${scrollPosition}px)`;

      requestId = requestAnimationFrame(scroll);
    };

    requestId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, [duplicatedItems, items.length, itemWidth, isMobile]);

  return (
    <section className="py-8 sm:py-10 md:py-12 px-0 bg-[#ECE8D5] overflow-hidden w-full">
      {/* Title */}
      <motion.h2
        className={`${kugileFont.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mb-8 sm:mb-10 md:mb-12 text-[#2a0e04]`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        - His Collection -
      </motion.h2>

      {/* Scrolling gallery container */}
      <div className="relative w-full overflow-x-hidden">
        <div className="w-full">
          <div
            ref={scrollRef}
            className="flex items-center whitespace-nowrap space-x-4 md:space-x-6 transition-transform duration-100"
            style={{ willChange: 'transform' }}
          >
            {duplicatedItems.map((item, index) => (
              <Link
                href={item.url}
                key={`${item.id}-${index}`}
                className="inline-block item-wrapper"
                style={{ width: itemWidth ? `${itemWidth}px` : 'auto' }}
              >
                <div className="group flex flex-col items-center">
                  {/* Image frame */}
                  <div className="relative mb-3 transform transition-transform duration-300 group-hover:scale-105 w-full">
                    <div 
                      className="overflow-hidden mx-auto"
                      style={{ 
                        width: itemWidth ? `${Math.min(itemWidth, itemWidth * 0.9)}px` : '100%',
                        height: itemWidth ? `${Math.min(itemWidth, itemWidth * 0.9)}px` : 'auto',
                        maxWidth: '100%'
                      }}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={item.image}
                          alt={item.caption}
                          fill
                          className="object-cover"
                          sizes={`(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw`}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Caption */}
                  <p className={`${playfair.className} text-xs sm:text-sm md:text-base lg:text-lg text-[#2a0e04] text-center`}>
                    {item.caption}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Swipe prompt for mobile */}
      

      {/* Visit gallery button */}
      <div className="flex justify-center mt-8 sm:mt-10">
        <motion.a
          href="/gallery"
          className={`${playfair.className} bg-[#2a0e04] text-[#f5f5f0] px-4 sm:px-6 py-2 sm:py-2.5 rounded-md text-sm sm:text-base hover:bg-[#3a2f25] transition-colors duration-300`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          - Visit the gallery -
        </motion.a>
      </div>
    </section>
  );
};

export default CollectionSection;