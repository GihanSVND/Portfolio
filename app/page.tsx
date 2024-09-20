import Image from "next/image";
import {Poppins} from "next/font/google"

const poppins1 = Poppins({weight: '100', subsets: ["latin"]})
const poppins2 = Poppins({weight: '200', subsets: ["latin"]})
const poppins3 = Poppins({weight: '300', subsets: ["latin"]})
const poppins4 = Poppins({weight: '400', subsets: ["latin"]})
const poppins5 = Poppins({weight: '500', subsets: ["latin"]})
const poppins6 = Poppins({weight: '600', subsets: ["latin"]})
const poppins7 = Poppins({weight: '700', subsets: ["latin"]})

export default function Home() {
  return (
    <body className={poppins2.className}>
    <div className="bg-black">
      {/* Main Section */}
      <div className="flex flex-col justify-center items-center h-screen relative ">
        
        <div className="transform -translate-y-[-680px] z-40">
          <svg className="animate-bounce w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
        
        {/* Main Image */}
        <Image
          src="/thinker.png"
          alt="File icon"
          width={600}
          height={600}
          className="z-10 transform scale-100 -translate-y-[-100px] transition-transform duration-500 ease-out"
        />

        {/* Large Text */}
      
          <h1 className={`${poppins7.className} absolute z-0 text-[300px] font-extrabold text-gray-300 transform -translate-y-[210px]`}>
            THINKER
            <span className="text-[#FF4401]">.</span>
          </h1>
        
        
      </div>
      

      {/* New Section for Grid */}
      <section className="w-full py-[200px] bg-black">
      
        <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 px-4">
          {/* Left Column - Image */}
          <div className="flex flex-col items-start transform -translate-x-[-200px]">
            <div className="absolute bottom-16 w-[90px] border-t-2 border-[#FF4401]  -translate-y-[680px]"></div>
            <p className="text-[30px]">
              Love 
              <span className={`${poppins7.className} text-[#FF4401]`}> UI/UX</span>
              </p>
              
              <p className="text-[50px]">
                <span className={`${poppins7.className} text-[#FF4401]`}> Develop</span>
                Technology 
              </p>
              
              <p className={`${poppins1.className} -translate-x-[15px] text-[170px]`}>
                Design 
              </p>
              <p className="text-[30px]">
              Hello!. I am  
              <span className={`${poppins7.className} text-[#FF4401]`}> Gihan Savinda</span>
                <br/>
                <span className={`${poppins2.className} text-[25px]`}>
                I enjoy creating delightful, human-centered
                <br/>
                digital experiences.
                </span>
              </p>
          </div>

          

          {/* Right Column - Text */}
          <div className="flex flex-col justify-center items-start text-left text-white -translate-x-[-70px]">
            
          <h1 className={`${poppins7.className} -rotate-90 absolute z-0 text-[150px] font-extrabold text-gray-300 transform -translate-x-[170px] -translate-y-[120px]`}>
            Brands
            <span className="text-[#FF4401]">.</span>
          </h1>
          <Image
          src="/gihan.png"
          alt="File icon"
          width={700}
          height={700}
          className="z-10 transform scale-100 -translate-y-[100px] transition-transform duration-500 ease-out"
        />
            
          </div>
        </div>
      </section>
    </div>
    </body>
  );
}
