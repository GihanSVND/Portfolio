// components/Hero.tsx
import Image from "next/image";
import localFont from "next/font/local";

const ivyfont = localFont({
  src: "../app/fonts/Ivy.woff",
})

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white font-[Ivy] px-4">
      <div className={`text-left leading-snug ${ivyfont.className}`}>
        <p className={`text-[32px] md:text-[50px] font-medium text-gray-400 -mt-2 `}>
          Hey, I&apos;m 
          <span className="inline-block w-[100px] md:w-[150px] mx-2 align-middle">
            <Image
              src="/1.png"
              alt="Decor 1"
              width={150}
              height={73}
              className="inline-block"
            />
          </span>
          <span className="text-black font-medium -mt-2">Gihan</span>
        </p>

        <p className="text-[32px] md:text-[50px] font-medium text-black -mt-2">
          UI/UX Designer
          <span className="inline-block mx-2 w-[60px] md:w-[150px] align-middle ">
            <Image
              src="/2.png"
              alt="Decor 1"
              width={150}
              height={73}
              className="inline-block"
            />
          </span>
          <span className="inline-block w-[60px] md:w-[150px] align-middle ">
            <Image
              src="/3.png"
              alt="Decor 2"
              width={150}
              height={73}
              className="inline-block"
            />
          </span>
        </p>

        <p className="text-[32px] md:text-[50px] text-gray-500 font-medium -mt-2">
          who enjoy creating
          <span className="text-black font-medium ml-2">human</span>
        </p>

        <p className="text-[32px] md:text-[50px] text-gray-500 font-medium -mt-2">
          <span className="text-black font-medium">centered</span> experiences.
        </p>
      </div>
    </section>
  );
};

export default Hero;
