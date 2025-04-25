import React from "react";
import { FaCheckSquare } from "react-icons/fa";
import { MdSpeed } from "react-icons/md";

const checklistLeft = [
  "Premium quality",
  "Tailwind CSS",
  "Use for Lifetime",
];

const checklistRight = [
  "Next.js",
  "Rich Documentation",
  "Developer Friendly",
];

const Levelup = () => {
  return (
    <div className="w-full py-16 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 w-full">
          <h1 className="text-2xl sm:text-3xl text-amber-50 font-bold font-sans mb-4">
            Crafted For Startup, SaaS and Business Sites
          </h1>
          <p className="text-gray-400 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            doloremque quis in et excepturi qui voluptatum reprehenderit.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 text-gray-400">
          
            <div className="space-y-2">
              {checklistLeft.map((item, index) => (
                <div key={index} className="flex items-center">
                  <FaCheckSquare className="text-blue-500" />
                  <p className="ml-2">{item}</p>
                </div>
              ))}
            </div>
          
            <div className="space-y-2">
              {checklistRight.map((item, index) => (
                <div key={index} className="flex items-center">
                  <FaCheckSquare className="text-blue-500" />
                  <p className="ml-2">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

    
        <div className="lg:w-1/2 w-full bg-gray-900 rounded-xl p-4 flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/2 bg-gray-400 h-48 sm:h-auto"></div>
          <div className="w-full sm:w-1/2 flex flex-col gap-4 bg-gray-200 p-4">
            <div className="bg-gray-600 h-80 sm:h-1/2 w-full"></div>
            <div className="bg-gray-700 flex justify-center items-center p-2 h-80 sm:h-1/2 w-full">
              <div className="text-white bg-blue-600 text-2xl sm:text-3xl rotate-[-10deg] p-4">
                <MdSpeed />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Levelup;
