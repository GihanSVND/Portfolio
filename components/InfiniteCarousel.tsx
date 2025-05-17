import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// TypeScript interface for card data
interface CardData {
  id: number;
  thumbImage: string; // Path to the top image (Thumb.png)
  title: string;
  description: string;
  link: string; // Added link property
}

// TypeScript interface for component props
interface InfiniteCarouselProps {
  cards: CardData[];
  speed?: number; // Speed of the carousel in pixels per second
  gap?: number; // Gap between cards in pixels
}

export default function InfiniteCarousel({ 
  cards, 
  speed = 30, 
  gap = 24 
}: InfiniteCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [clonedCards, setClonedCards] = useState<CardData[]>([]);
  
  // Initialize with the cards data directly for initial render
  useEffect(() => {
    if (cards.length === 0) return;
    
    // Clone cards to ensure we have enough for the infinite effect
    const cardMultiplier = 3; // Create 3 sets of cards
    const duplicatedCards = [];
    
    for (let i = 0; i < cardMultiplier; i++) {
      duplicatedCards.push(...cards.map(card => ({ 
        ...card, 
        id: card.id + (i * cards.length) 
      })));
    }
    
    setClonedCards(duplicatedCards);
  }, [cards]);
  
  // Animation logic using CSS animation instead of JS for better performance
  useEffect(() => {
    if (!carouselRef.current || cards.length === 0) return;
    
    const carousel = carouselRef.current;
    const carouselInner = carousel.querySelector('.carousel-inner') as HTMLElement;
    if (!carouselInner) return;
    
    // Calculate total width of a single set of cards
    const cardWidth = 350; // Fixed card width
    const totalWidth = (cardWidth + gap) * cards.length;
    
    // Set up CSS animation
    carouselInner.style.setProperty('--total-width', `${totalWidth}px`);
    carouselInner.style.setProperty('--animation-duration', `${totalWidth / speed}s`);
    carouselInner.classList.add('animate-carousel');
    
  }, [cards, speed, gap]);
  
  // If no cards provided, show a placeholder
  if (cards.length === 0) {
    return (
      <div className="flex justify-center items-center h-64 w-full bg-gray-100 text-gray-500">
        No cards provided for the carousel
      </div>
    );
  }

  return (
    <div 
      ref={carouselRef} 
      className="relative overflow-hidden w-full h-[700px] "
    >
      <style jsx>{`
        .animate-carousel {
          animation: scroll var(--animation-duration) linear infinite;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-1 * var(--total-width)));
          }
        }
        
        .carousel-card {
          transition: transform 0.3s ease;
        }
        
        .carousel-card:hover {
          transform: rotate(5deg) scale(105%) ;
         
        }
      `}</style>
      
      <div 
        className="carousel-inner flex animate-carousel"
        style={{ gap: `${gap}px` }}
      >
        {clonedCards.map((card) => (
          <a
            key={card.id}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="carousel-card flex-shrink-0 block"
            style={{ width: '350px', height: '500px', textDecoration: 'none' }}
          >
            <div className="relative w-full h-full mt-[100px]">
              {/* Background image */}
              <div className="relative w-[348px] h-[470px] ">
                <Image 
                  src="/Back.png" 
                  alt="Card background" 
                  className="w-[348px] h-[470px] object-cover"
                  width={350}
                  height={500}
                  priority
                />
              </div>
              
              {/* Card content */}
              <div className="absolute inset-0 items-center flex flex-col p-6">
                {/* Top image */}
                <div className="relative w-[265px] h-[169px] mb-4 mt-10">
                  <Image 
                    src={card.thumbImage || "/Thumb.png"} 
                    alt="Thumbnail"
                    className="w-full h-full object-cover bg-black rounded-lg "
                    width={265}
                    height={169}
                    priority
                  />
                </div>
                
                {/* Card title */}
                <h3 className="text-2xl font-serif mb-4 text-center">
                  {card.title}
                </h3>
                
                {/* Card description */}
                <p className="text-sm text-center font-serif">
                  {card.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}