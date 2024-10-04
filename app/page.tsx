"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
import MainNavBar from "@/components/mainNavBar";
import CategoryFilter from "@/components/filter";
import Card from "@/components/card";
import { useState } from "react";

const poppins1 = Poppins({ weight: "100", subsets: ["latin"] });
const poppins2 = Poppins({ weight: "200", subsets: ["latin"] });

const poppins4 = Poppins({ weight: "400", subsets: ["latin"] });
const poppins5 = Poppins({ weight: "500", subsets: ["latin"] });

const poppins7 = Poppins({ weight: "700", subsets: ["latin"] });

// Define your categories
const categories = ["Swift", "UI/UX", "Web", "ML"];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0]
  );

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    // Add logic to fetch/filter/display projects based on category
    console.log("Selected category:", category);
  };

  return (
    <div className={poppins2.className}>
      <div>
        <MainNavBar></MainNavBar>
        <div className="bg-black">
          {/* Main Section */}
          <div className="flex flex-col justify-center items-center h-screen relative">
            {/* Bouncing SVG Icon */}
            <div className="translate-y-[630px] z-40">
              <svg
                className="animate-bounce w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>

            {/* Main Image */}
            <Image
              src="/thinker.png"
              alt="File icon"
              width={600}
              height={600}
              className="z-10 transform scale-100 -translate-y-[-100px] transition-transform duration-100 ease-out sm:w-[600px] sm:h-[600px] md:w-[600px] md:h-[600px] lg:w-[600px] lg:h-[600px]"
            />

            {/* Large Text */}
            <h1
              className={`${poppins7.className} absolute z-0 text-[80px] sm:text-[100px] md:text-[200px] lg:text-[300px] font-extrabold text-gray-300 transform -translate-y-[210px]`}
            >
              THINKER
              <span className="text-[#FF4401]">.</span>
            </h1>
          </div>

          {/* New Section for Grid */}
          <section id="about">
            <div className="w-full py-[100px] md:py-[200px] bg-black">
              <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
                {/* Left Column - Text */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left transform md:-translate-x-[-100px] lg:-translate-x-[-200px]">
                  <div className="relative bottom-16 w-[90px] border-t-2 border-[#FF4401] lg:translate-y-[-780px] mb-4 md:absolute md:-translate-y-[600px] "></div>

                  {/* "Love UI/UX" and "Develop Technology" Text */}
                  <p className="text-[24px] md:text-[30px]">
                    Love
                    <span className={`${poppins7.className} text-[#FF4401]`}>
                      {" "}
                      UI/UX
                    </span>
                  </p>
                  <p className="text-[40px] md:text-[50px]">
                    <span className={`${poppins7.className} text-[#FF4401]`}>
                      {" "}
                      Develop
                    </span>
                    Technology
                  </p>

                  {/* "Hello! I am Gihan Savinda" Text */}
                  <div className="md:translate-y-[250px]">
                    <p className="text-[20px] md:text-[30px]">
                      Hello! I am
                      <span className={`${poppins7.className} text-[#FF4401]`}>
                        {" "}
                        Gihan Savinda
                      </span>
                      <br />
                      <span
                        className={`${poppins2.className} text-[18px] md:text-[25px]`}
                      >
                        I enjoy creating delightful, human-centered
                        <br />
                        digital experiences.
                      </span>
                    </p>
                  </div>

                  {/* Move the "Design" Text After the Introduction on Small Screens */}
                  <p
                    className={`${poppins1.className} text-[100px] md:text-[170px] transform translate-y-[10px] md:translate-y-[-160px] transition-transform duration-500 ease-out`}
                  >
                    Design
                  </p>
                </div>

                {/* Right Column - Text + Image */}
                <div className="flex flex-col-reverse md:flex-col pb-[200px] lg:pb-[0px] justify-center items-center md:items-start text-center md:text-left text-white md:pl-[50px] lg:pl-[100px]">
                  {/* Image Below Text on Small Screens */}
                  <Image
                    src="/gihan.png"
                    alt="Gihan Image"
                    width={600}
                    height={600}
                    className="z-10 transform scale-100 mt-8 md:mt-0 translate-y-[-180px] translate-x-[-40px] md:-translate-y-[100px] md:translate-x-[-60px] transition-transform duration-500 ease-out"
                  />

                  {/* Rotated Text on Small Screens */}
                  <h1
                    className={`${poppins7.className} -rotate-90  text-[100px] md:text-[150px] font-extrabold text-gray-300 transform translate-y-[140px] translate-x-[-90px] md:-translate-y-[500px] md:-translate-x-[200px]`}
                  >
                    Brands
                    <span className="text-[#FF4401]">.</span>
                  </h1>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex flex-col translate-y-[-120px] justify-center items-center relative ">
              <h1
                id="timeline"
                className={`${poppins5.className} absolute text-[60px] sm:text-[100px] md:text-[200px] font-extrabold text-gray-300 -mt-[400px] md:-mt-[200px]`}
              >
                Time Line
                <span className="text-[#FF4401]">.</span>
              </h1>
            </div>
            <div>
              <div className="relative flex flex-col items-center py-[100px] translate-y-[-300px] sm:translate-y-[-100px]">
                {/* Vertical Line */}
                <div className="z-10 absolute w-[1px] bg-[#FF4401] h-[700px] left-1/2 transform -translate-x-1/2"></div>
                <div className="absolute bottom-16 w-[50px] border-t-[1px] border-[#FF4401] translate-y-[17px]"></div>

                {/* Timeline Cards */}
                <div className="z-40 space-y-[100px]">
                  {/* First card: Logo Designer */}
                  <div className="flex items-center w-full">
                    <div className="absolute w-4 h-4 bg-[#FF4401] rounded-full left-1/2 transform translate-y-[75px] sm:translate-y-[-5px] -translate-x-1/2"></div>
                    <div className="flex justify-center sm:justify-start sm:pr-10 sm:translate-x-[-300px]">
                      <div className="bg-[#18181b] border-[1px] border-white text-white p-8 w-[300px] sm:w-[400px] h-[150px] rounded-[30px] shadow-lg">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-20 pr-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <div>
                            <h3
                              className={`${poppins7.className} text-[20px] sm:text-[30px] font-bold text-[#FF4401]`}
                            >
                              Co-Founder
                            </h3>
                            <p className={`${poppins4.className} text-sm`}>
                              GenO3
                            </p>
                            <p className={`${poppins4.className} text-sm`}>
                              Apr 2024 – Present
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hidden sm:block w-1/2"></div>{" "}
                    {/* Empty space for larger screens */}
                  </div>

                  {/* Second card: 3D Artist */}
                  <div className="flex items-center w-full">
                    <div className="absolute w-4 h-4 bg-[#FF4401] rounded-full left-1/2 transform translate-y-[75px] sm:translate-y-[-5px] -translate-x-1/2"></div>
                    <div className="hidden sm:block w-1/2"></div>{" "}
                    {/* Empty space for larger screens */}
                    <div className="flex justify-center sm:justify-start sm:pr-10 sm:translate-x-[350px]">
                      <div className="bg-[#18181b] border-[1px] border-white text-white p-8 w-[300px] sm:w-[400px] h-[150px] rounded-[30px] shadow-lg">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-20 pr-5"
                          >
                            <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
                          </svg>
                          <div>
                            <h3
                              className={`${poppins7.className} text-[20px] sm:text-[30px] font-bold text-[#FF4401]`}
                            >
                              3D Artist
                            </h3>
                            <p className={`${poppins4.className} text-sm`}>
                              CrewGen - Full time
                            </p>
                            <p className={`${poppins4.className} text-sm`}>
                              Jan 2021 – Dec 2022
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Third card: Logo Designer */}
                  <div className="flex items-center w-full">
                    <div className="absolute w-4 h-4 bg-[#FF4401] rounded-full left-1/2 transform translate-y-[75px] sm:translate-y-[-5px] -translate-x-1/2"></div>
                    <div className="flex justify-center sm:justify-start sm:pr-10 sm:translate-x-[-300px]">
                      <div className="bg-[#18181b] border-[1px] border-white text-white p-8 w-[300px] sm:w-[400px] h-[150px] rounded-[30px] shadow-lg">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-20 pr-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <div>
                            <h3
                              className={`${poppins7.className} text-[20px] sm:text-[30px] font-bold text-[#FF4401]`}
                            >
                              Logo Designer
                            </h3>
                            <p className={`${poppins4.className} text-sm`}>
                              CrewGen - Full time
                            </p>
                            <p className={`${poppins4.className} text-sm`}>
                              Jan 2020 – Dec 2020
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hidden sm:block w-1/2"></div>{" "}
                    {/* Empty space for larger screens */}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="flex flex-col sm:py-[150px] justify-center items-center relative ">
            <h1
              id="work"
              className={`${poppins5.className} absolute text-[60px] sm:text-[100px] md:text-[200px] font-extrabold text-gray-300 -mt-[250px] md:-mt-[100px]`}
            >
              Work
              <span className="text-[#FF4401]">.</span>
            </h1>
          </div>
          
          <div className="flex flex-col items-center">
            
            {/* Include the CategoryFilter component */}
            <CategoryFilter
              categories={categories}
              onSelectCategory={handleCategoryChange}
            />
          </div>

          {/* Projects Section */}
          <div className="px-4">
            
            
              {/* Here you'd dynamically load projects based on the selected category */}

              {selectedCategory === "Swift" && (
                <div>
                <div className="py-[50px] px-[10px] sm:px-[30px] md:px-[80px] lg:px-[250px] flex justify-items-center">
                  <Card
                    image="/CLAWS.png"
                    title="CLAWS – Cultivated Lands Animal Warning System"
                    description="Embedded system that identifies harmful animals for crops in Sri Lanka with machine learning models and cloud computing technologies. "
                    seeMoreLink="https://example.com"
                  />
                </div>
                <div className="py-[50px] px-[10px] sm:px-[30px] md:px-[80px] lg:px-[250px] flex justify-items-center">
                  <Card
                    image="/TailCast.png"
                    title="TailCast"
                    description="AI powered IOS app that work as an All-in-one library including e-books, generate short stories and real-time audio books."
                    seeMoreLink="https://example.com"
                  />
                </div>
              </div>
              
              )}
              {selectedCategory === "UI/UX" && (
                <div>
                <div className="py-[50px] px-[10px] sm:px-[30px] md:px-[80px] lg:px-[250px] flex justify-items-center">
                  <Card
                    image="/CLAWS.png"
                    title="CLAWS – Cultivated Lands Animal Warning System"
                    description="Embedded system that identifies harmful animals for crops in Sri Lanka with machine learning models and cloud computing technologies. "
                    seeMoreLink="https://example.com"
                  />
                </div>
                <div className="py-[50px] px-[10px] sm:px-[30px] md:px-[80px] lg:px-[250px] flex justify-items-center">
                  <Card
                    image="/TailCast.png"
                    title="TailCast"
                    description="AI powered IOS app that work as an All-in-one library including e-books, generate short stories and real-time audio books."
                    seeMoreLink="https://example.com"
                  />
                </div>
              </div>
              )}
              {selectedCategory === "Web" && <p>Displaying Web projects...</p>}
              {selectedCategory === "ML" && <p>Displaying ML projects...</p>}
            
          </div>
        </div>
      </div>
    </div>
  );
}
