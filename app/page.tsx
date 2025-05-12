"use client";

import { Bokor, Poppins } from "next/font/google";

import { useState } from "react";
import React, { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

import localFont from "next/font/local";

import ThinkerSection from '../components/ThinkerSection';


const kugileFont = localFont({
  src: "/fonts/Kugile.woff",
});


// Define your categories
const categories = ["UI/UX", "Swift", "Web", "ML"];

export default function Home() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_ogkst05", "template_t9urzgm", form.current, {
          publicKey: "mH9V7Z_Kh9KMP8dn5",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

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
    <main>
    <div className="bg-[#ECE8D5] ">
      <ThinkerSection kugileFont={kugileFont} />
    </div>
    </main>
  );
}
