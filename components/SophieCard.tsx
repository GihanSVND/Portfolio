"use client";

import Image from "next/image";
import { FaXTwitter, FaInstagram, FaDribbble } from "react-icons/fa6";
import localFont from "next/font/local";


const satoshi = localFont({
  src: "../app/fonts/Satoshi.woff",
});

const satoshim = localFont({
  src: "../app/fonts/SatoshiMedium.woff",
});



const experiences = [
  { title: "UI/UX Designer", company: "MetaZync", year: "2025" },
  { title: "3D Artist", company: "Crewgen", year: "2022" },
  { title: "Graphic Designer", company: "Crewgen", year: "2021" },
];

export default function SophieCard() {
  return (
    <div>
      <div className="text-center ">
        <p
          className={`${satoshim.className} text-sm text-[#1F1F1F] flex justify-center items-center gap-2 font-semibold `}
        >
          <span className="w-2 h-2 bg-[#1F1F1F] rounded-full inline-block"></span>
          Experience
        </p>
        <h2
          className={`${satoshim.className} text-4xl md:text-[45px] mt-3 text-[#1F1F1F] leading-[50px] -tracking-[0.02em]`}
        >
          The Timeline
        </h2>
      </div>

      <div className="w-full max-w-[1300px] mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8">
        {/* Left Panel */}
        <div className="w-full lg:w-[300px] bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center ">
          {/* Profile Image */}
          <div className="w-full rounded-xl overflow-hidden">
            <Image
              src="/prof.png"
              alt="Profile"
              width={300}
              height={300}
              className="w-full object-cover rounded-xl"
            />
          </div>

          {/* Availability */}
          <p
            className={`mt-4 text-sm text-gray-500 flex items-center gap-2 ${satoshi.className} `}
          >
            <span className="h-2 w-2 rounded-full bg-green-500 inline-block"></span>
            available for work
          </p>

          {/* Name & Role */}
          <h2 className={`text-2xl font-semibold mt-2 ${satoshi.className}`}>
            Gihan Savinda
          </h2>

          {/* Social Media Buttons */}
          <div className="flex gap-4 mt-4 text-gray-500 text-lg">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              <FaDribbble />
            </a>
          </div>

          {/* Contact Button */}
          {/* <div className="flex items-center justify-center ">
          <GradientButton text="See all" href="/get-started" />
        </div> */} 
        </div>

        {/* Right Panel */}
        <div className="flex-1">
          {/* Experience Section */}
          <div>
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-200 rounded-xl px-4 py-3 mb-3 space-y-1 sm:space-y-0 sm:gap-6 ${satoshim.className}`}

              >
                <p className="font-medium text-gray-800 min-w-[200px] ">{exp.title}</p>
                <p className="text-gray-500">{exp.company}</p>
                <p className="text-gray-400">{exp.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
