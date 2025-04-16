"use client";

import React, { useEffect } from 'react'
import { PiFireSimpleFill } from "react-icons/pi";

const Hero = () => {
    const handleButtonClickGetPro = () => {
        alert("Get Pro Button clicked!");
    }
    const handleButtonClickStar = () => {
        alert("Star Button clicked!")
    }

  return (
    <div className="flex flex-col text-center my-30">

        <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-100 sm:text-7xl">
          Free and Open-Source Next.js Template for Startup & SaaS
        </h1>
        <p className="mt-8 text-lg w-3xl ml-70 flex font-medium text-pretty text-gray-500 sm:text-xl/8">
          Startup is free Next.js template for startup and SaaS business website
          comes with all the essential pages, components, and section you need
          to launch a complete business website, built-with Next 13.x and
          Tailwind CSS
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-2.5">
          <a
            href="#"
            onClick={handleButtonClickGetPro}
            className="bg-blue-500 flex rounded px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500"
          >
            <span className="pt-0.5 text-amber-400"><PiFireSimpleFill /></span><button>Get Pro</button>
          </a>
          <a
            href="#"
            onClick={handleButtonClickStar}
            className="text-sm/6 px-6 py-2  hover:bg-indigo-500 rounded font-semibold bg-gray-600 text-gray-100"
          >
            Star on GitHub
          </a>
        </div>
      </div>
  )
}

export default Hero
