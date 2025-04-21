import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Ready from "@/components/Ready";
import LineSet from "@/components/LineSet";
import { LineSetData } from "@/components/data";
import { FaCheckSquare } from "react-icons/fa";
import { MdSpeed } from "react-icons/md";

export default function Home() {
  return (
    <div className="bg-[url('/Image/image.jpg')] min-h-screen sm:p-2 bg-cover bg-center bg-no-repeat bg-fixed font-[var(--font-geist-sans)]">
      <NavBar />
      <Hero />
      <Main />
      <Ready />
      <div className="flex justify-center">
        <div className="flex justify-center items-center rounded-2xl text-gray-400 h-20 w-250 bg-gray-900 gap-10">
          {LineSetData?.map((item) => (
            <div key={item.id}>
              <LineSet Icon={item.Icon} title={item.title} />
            </div>
          ))}
        </div>
      </div>
      <div className="p-2.5 gap-1 flex flex-row justify-center items-center h-100 w-full mt-20">
        <div className="flex justify-center items-cente flex-col h-full w-1/2">
          <div className="ml-16">
            <h1 className="text-start font-bold text-amber-50 font-sans w-1/2 text-2xl">
              Crafted For Startup, SaaS and Business Sites
            </h1>
            <p className="w-1/2 text-gray-400 mt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              doloremque quis in et excepturi qui voluptatum reprehenderit.
              Recusandae ipsa excepturi natus nam quos,
            </p>
            <div className="flex flex-row mt-4 text-gray-400">
              <div className="flex flex-col">
                <div className="flex justify-center items-center flex-row">
                  <FaCheckSquare className="" />
                  <p className="ml-2">Premium quality</p>
                </div>
                <div className="flex justify-center items-center flex-row">
                  <FaCheckSquare className="" />
                  <p className="ml-2">Tailwind CSS</p>
                </div>
                <div className="flex justify-center items-center flex-row">
                  <FaCheckSquare className="" />
                  <p className="ml-2">Use for Lifetime</p>
                </div>
              </div>
              <div className="flex flex-col ml-6">
                <div className="flex justify-center items-center flex-row">
                  <FaCheckSquare className="" />
                  <p className="ml-2">Next.js</p>
                </div>
                <div className="flex justify-center items-center flex-row">
                  <FaCheckSquare className="" />
                  <p className="ml-2">Rich Documentation</p>
                </div>
                <div className="flex justify-center items-center flex-row">
                  <FaCheckSquare className="" />
                  <p className="ml-2">Developer Friendly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row bg-gray-900 h-full w-1/3 p-4">
          <div className="h-full w-1/2 bg-gray-400"></div>
          <div className="flex flex-col gap-1 h-full w-1/2 ml-1 bg-gray-200 p-4">
            <div className="h-1/2 w-full bg-gray-600"></div>
            <div className="flex justify-center items-center h-1/2 w-full bg-gray-700 p-1">
              <div className="flex justify-center items-center text-5xl h-1/2 w-1/2 -rotate-10 bg-blue-600">
                <MdSpeed className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
