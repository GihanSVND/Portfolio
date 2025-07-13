// components/Hero.tsx
import Image from "next/image";
import localFont from "next/font/local";

const satoshi = localFont({
  src: "../app/fonts/Satoshi.woff",
})

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen font-[Ivy] px-4 mt-[125px] ">
      <div className={`text-left leading-snug ${satoshi.className}`}>
        <p className={`text-[32px] md:text-[50px] font-medium text-gray-400 -mt-2 `}>
          HEY, I&apos;M 
          <span className="inline-block w-[100px] md:w-[150px] mx-2 align-middle">
            <Image
              src="/1.png"
              alt="Decor 1"
              width={150}
              height={73}
              className="inline-block"
            />
          </span>
          <span className="text-black font-medium -mt-2">GIHAN</span>
        </p>

        <p className="text-[32px] md:text-[50px] font-medium text-black -mt-2  ">
          <span className="text-black font-medium mr-8">UI/UX DESIGNER</span>
          <span className="inline-block w-[100px] md:w-[150px] mr-2 align-middle">
            <Image
              src="/2.png"
              alt="Decor 1"
              width={150}
              height={73}
              className="inline-block"
            />
          </span>
          <span className="inline-block w-[100px] md:w-[150px] align-middle">
            <Image
              src="/3.png"
              alt="Decor 1"
              width={150}
              height={73}
              className="inline-block"
            />
          </span>
        </p>

        <p className="text-[32px] md:text-[50px] text-gray-500 font-medium ">
          WHO ENJOY CREATING
          <span className="text-black font-medium ml-2">HUMAN</span>
        </p>

        <p className="text-[32px] md:text-[50px] text-gray-500 font-medium mt-1">
          <span className="text-black font-medium">CENTERED</span> EXPERIENCES.
        </p>
      </div>
    </section>
  );
};

export default Hero;
