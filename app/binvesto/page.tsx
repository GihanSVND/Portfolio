"use client";

import { Poppins } from "next/font/google";

import React from "react";

import Link from "next/link";


const poppins2 = Poppins({ weight: "200", subsets: ["latin"] });

export default function Home() {
  return (
    <div className={poppins2.className}>
      <div className="bg-black text-white min-h-screen flex justify-center items-center">
        <div className="bg-black text-white min-h-screen py-10 px-5">
          <div className="max-w-5xl mx-auto">
            {/* Add Home button at the top */}
            <div className="flex justify-start mb-6">
              <Link href="/">
                <button className="text-white bg-[#FF4401] hover:bg-[#FF5722] font-bold py-2 px-4 rounded-[50px]">
                  Home
                </button>
              </Link>
            </div>

            <h1 className="text-4xl font-bold text-right text-[#FF4401] mb-6">
              Use Case
            </h1>
            <h1 className="text-[100px] text-center mb-6">BINVESTO</h1>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#FF4401] mb-4">
                Overview
              </h2>
              <p className="pl-[50px]">
                This web application serves as a dynamic platform connecting
                small-scale entrepreneurs with large-scale investors. Its goal
                is to facilitate and streamline the investment process, allowing
                small businesses to find funding while giving investors access
                to a pool of potential, high-growth businesses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#FF4401] mb-4">
                Actors
              </h2>
              <ul className="list-disc pl-[50px]">
                <li>
                  Small-Level Entrepreneurs - Business owners or start-ups
                  seeking funding to grow or expand their operations.
                </li>
                <li>
                  Large-Level Entrepreneurs/Investors: Investors or large
                  companies looking to invest in promising start-ups or small
                  businesses.
                </li>
                <li>
                  Platform Administrator: Responsible for managing the platform,
                  maintaining system functionality, and ensuring both types of
                  users have a seamless experience.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#FF4401] mb-4">
                Problem Statement
              </h2>
              <ul className="list-disc pl-[50px]">
                <li>
                  Small-Level Entrepreneurs often face challenges in finding
                  credible investors who are willing to provide the capital
                  needed for expansion. Traditional methods of securing
                  investment are time-consuming, expensive, and often
                  inaccessible for small-scale entrepreneurs.
                </li>
                <li>
                  Investors face difficulties identifying and evaluating
                  promising small businesses that are investment-ready and
                  aligned with their portfolios or financial interests.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#FF4401] mb-4">
                Objective
              </h2>
              <p className="pl-[50px]">
                The platform aims to eliminate these barriers by creating a
                professional, organized, and efficient system where small
                businesses can pitch their ideas to investors, while investors
                can easily evaluate opportunities and make informed decisions
                about their investments.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#FF4401] mb-4">
                Functional Use Case
              </h2>
              <h3 className="text-xl pl-[50px] font-bold mb-4">
                Primary Use Case: Investment Process
              </h3>
              <ul className="list-disc pl-[50px]">
                <li>
                  Trigger: A small entrepreneur creates a profile and submits an
                  investment pitch.
                </li>
                <li>
                  Precondition: The entrepreneur`&apos;`s profile is complete, and the
                  pitch is approved by the platform administrator.
                </li>
                <li>Flow of Events</li>
                <ol className="list-decimal pl-[20px]">
                  <li>
                    The entrepreneur logs into the platform and fills out
                    detailed information about their business, including
                    financial data, growth projections, and the amount of
                    investment required.
                  </li>
                  <li>
                    The pitch is submitted for platform review to ensure
                    legitimacy and quality.
                  </li>
                  <li>
                    Investors browse available business opportunities, filtering
                    based on industry, location, funding amount, and other
                    criteria.
                  </li>
                  <li>
                    The investor expresses interest by contacting the
                    entrepreneur or scheduling a meeting.
                  </li>
                  <li>
                    Once an agreement is reached, the platform facilitates the
                    communication and paperwork needed to close the deal.
                  </li>
                </ol>
                <li>
                  Postcondition: The entrepreneur and investor reach an
                  investment agreement, and both parties move forward with their
                  objectives.
                </li>
              </ul>
              <h3 className="text-xl pl-[50px] font-bold mb-4 pt-[30px]">
              Secondary Use Case: Communication and Networking
              </h3>
              <ul className="list-disc pl-[50px]">
                <li>
                Trigger: Entrepreneurs and investors wish to engage in discussions before a formal agreement.
                </li>
                <li>
                Precondition: Both parties are registered on the platform.
                  pitch is approved by the platform administrator.
                </li>
                <li>Flow of Events</li>
                <ol className="list-decimal pl-[20px]">
                  <li>
                  Entrepreneurs and investors initiate communication via a secure messaging system.
                  </li>
                  <li>
                  Video conferencing or chat features are enabled for more in-depth discussions.
                  </li>
                  <li>
                  Either party can schedule meetings or follow-up sessions via the platform calendar.
                  </li>
                  
                </ol>
                <li>
                Postcondition: Continuous engagement between both parties, building trust and increasing chances of successful investment..
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#FF4401] mb-4">
                Features and Functionalities
              </h2>
              <ul className="list-disc pl-[50px]">
                <li>
                User Registration & Authentication
                </li>
                <li>Business Profiles & Pitches</li>
              <li>Secure Messaging & Communication Tools</li>
              <li>Investment Tracking</li>
              <li>Rating and Review System</li>
              <li>Financial Transaction Support</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#FF4401] mb-4">
               Success Criteria
              </h2>
              <h3 className="text-xl pl-[50px] font-bold mb-4">
              For Small Entrepreneurs
              </h3>
              <ul className="list-disc pl-[50px]">
                <li>
                Successful acquisition of the required investment amount.
                </li>
                <li>Access to large-scale networks of investors.</li>
              </ul>
              <h3 className="text-xl pl-[50px] pt-[30px] font-bold mb-4">
              For Large-Level Entrepreneurs/Investors:
              </h3>
              <ul className="list-disc pl-[50px]">
                <li>
                Easy identification of high-potential investment opportunities.
                </li>
                <li>Seamless management of multiple investments and their progress.</li>
              </ul>
              </section>

              <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#FF4401] mb-4">
              Non-Functional Requirements
              </h2>
              
              <ul className="list-disc pl-[50px]">
                <li>
                Security: Ensure that all data shared on the platform is encrypted, and user verification is thorough.
                </li>
                <li>Scalability: The platform must scale as the number of users both entrepreneurs and investors grows.</li>
                <li>Performance: The application should have fast loading times and be optimized for mobile and web use.</li>
                <li>User Experience: A clean, intuitive, and modern UI to ensure ease of use for all parties involved.</li>
              </ul>
              
              
              </section>
              <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#FF4401] mb-4">
               Potential Challenges and Mitigations
              </h2>
              
              <ul className="list-disc pl-[50px]">
                <li>
                Lack of trust between entrepreneurs and investors.
                </li>
                Mitigation: Include thorough vetting of all users, ratings, reviews, and a secure platform environment.
                <li>Entrepreneurs may have difficulty preparing high-quality pitches.</li>
                Mitigation: Provide resources, templates, and guidance to help small entrepreneurs create compelling pitches.
              </ul>
              
              </section>

              <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#FF4401] mb-4">
                Conclusion
              </h2>
              <p className="pl-[50px]">
              This platform plays a vital role in bridging the gap between small entrepreneurs seeking funding and large investors looking for new opportunities. It is designed to foster a professional, secure, and collaborative environment that allows both sides to connect and thrive.
              </p>
            </section>

            {/* Add more sections similarly */}
          </div>
        </div>
      </div>
    </div>
  );
}
