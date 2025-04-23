"use client";

import React from "react";
import { PiFireSimpleFill } from "react-icons/pi";

const Hero = () => {
  const handleButtonClickGetPro = () => {
    alert("Get Pro Button clicked!");
  };
  const handleButtonClickStar = () => {
    alert("Star Button clicked!");
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8 bg-gray-900">
      <h1 className="text-3xl sm:text-2xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl">
        Free and Open-Source Next.js Template for Startup & SaaS
      </h1>

      <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl">
        Startup is a free Next.js template for startup and SaaS business websites. It comes with all the essential pages, components, and sections you need to launch a complete business website — built with Next.js 13.x and Tailwind CSS.
      </p>

      <div className="mt-8 flex flex-col justify-center items-center sm:flex-row gap-4 w-full max-w-md sm:max-w-none">
        <a
          href="#"
          onClick={handleButtonClickGetPro}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded shadow transition"
        >
          <PiFireSimpleFill className="text-amber-400 text-xl" />
          Get Pro
        </a>

        <a
          href="#"
          onClick={handleButtonClickStar}
          className="w-full sm:w-auto inline-block text-white bg-gray-700 hover:bg-gray-600 font-semibold px-6 py-3 rounded shadow transition"
        >
          Star on GitHub
        </a>
      </div>
    </div>
  );
};

export default Hero;
