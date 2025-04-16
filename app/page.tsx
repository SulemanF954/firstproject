import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import { MdDashboard } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { SiVorondesign } from "react-icons/si";
import { GrResources } from "react-icons/gr";
import { FaCopy } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-[url('/Image/image.jpg')] min-h-screen sm:p-2 bg-cover bg-center bg-no-repeat bg-fixed font-[var(--font-geist-sans)]">
      <NavBar />
      <Hero />
      <div className="flex justify-center items-center">
        <div className="text-center bg-transparent p-2 rounded">
          <h2 className="text-2xl text-amber-50 font-bold mb-4">
            Main Features
          </h2>
          <p className="text-gray-300 w-150 mb-1">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form middle of text.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-8 mx-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-transparent p-4 rounded hover:shadow-lg transition-shadow duration-300">
            <MdDashboard className="w-10 h-10 p-1 rounded bg-blue-100 mb-4 text-blue-500 text-5xl" />
            <h3 className="text-lg font-semibold text-white">
              Crafted For Startups
            </h3>
            <p className="text-gray-400 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit non
              temporibus hic sunt exercitationem eos pariatur voluptate minus.
              Ab hic at quibusdam ea! Quaerat, debitis ratione. Porro sunt
              saepe.
            </p>
          </div>
          <div className="bg-transparent p-4 rounded">
            <SiVorondesign className="w-10 h-10 p-1 rounded bg-blue-100 mb-4 text-blue-500" />
            <h3 className="text-lg font-semibold text-white">
              High quality Design
            </h3>
            <p className="text-gray-400 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit non
              temporibus hic sunt exercitationem eos pariatur voluptate minus.
              Ab hic at quibusdam ea! Quaerat, debitis ratione. Porro sunt
              saepe.
            </p>
          </div>
          <div className="bg-transparent p-4 rounded ">
            <TbGridDots className="w-10 h-10 p-1 rounded bg-blue-100 mb-4 text-blue-500 text-5xl" />
            <h3 className="text-lg font-semibold text-white">
              Next.js 13 (Latest)
            </h3>
            <p className="text-gray-400 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit non
              temporibus hic sunt exercitationem eos pariatur voluptate minus.
              Ab hic at quibusdam ea! Quaerat, debitis ratione. Porro sunt
              saepe.
            </p>
          </div>
          <div className="bg-transparent p-4 rounded ">
            <IoSettings className="w-10 h-10 p-1 rounded bg-blue-100 mb-4 text-blue-500" />
            <h3 className="text-lg font-semibold text-white">Tailwind CSS</h3>
            <p className="text-gray-400 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit non
              temporibus hic sunt exercitationem eos pariatur voluptate minus.
              Ab hic at quibusdam ea! Quaerat, debitis ratione. Porro sunt
              saepe.
            </p>
          </div>
          <div className="bg-transparent p-4 rounded ">
            <FaCopy className="w-10 h-10 p-1 rounded bg-blue-100 mb-4 text-blue-500" />
            <h3 className="text-lg font-semibold text-white">
              Fully Customizable
            </h3>
            <p className="text-gray-400 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit non
              temporibus hic sunt exercitationem eos pariatur voluptate minus.
              Ab hic at quibusdam ea! Quaerat, debitis ratione. Porro sunt
              saepe.
            </p>
          </div>
          <div className="bg-transparent p-4 rounded ">
            <GrResources className="w-10 h-10 p-1 rounded bg-blue-100 mb-4 text-blue-500" />
            <h3 className="text-lg font-semibold text-white">
              Free And Open Source
            </h3>
            <p className="text-gray-400 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit non
              temporibus hic sunt exercitationem eos pariatur voluptate minus.
              Ab hic at quibusdam ea! Quaerat, debitis ratione. Porro sunt
              saepe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
