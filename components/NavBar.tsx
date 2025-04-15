import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";

const NavBar: React.FC = () => {
  return (
    <nav className="text-white flex justify-between items-center">
      {/* Left Side: Logo and Name */}
      <div className="flex items-center space-x-2">
        <img src="/Image/favicon.png" alt="Logo" className="h-8 w-8 bg-black" />
        <span className="text-xl font-bold">StockUp</span>
        <ul className="flex px-20 space-x-6">
          <li className=" hover:text-amber-100 px-4">Home</li>
          <li className=" hover:text-amber-100 px-4">About</li>
          <li className=" hover:text-amber-500 px-4">Blog</li>
          <li className=" hover:text-amber-100 px-4 ">Support</li>
          <div className="flex">
            <li className=" hover:text-amber-100 px-3">Pages</li>
            <FaAngleDown className="text-amber-100 pt-1 text-lg" />
          </div>
        </ul>
      </div>

      {/* Right Side: Sign In/Out Buttons */}
      <div className="mr-10 flex items-center space-x-2">
        <button className="bg-blue-500 rounded px-6 py-2  hover:bg-indigo-500 text-white font-thin">
        Sign In
        </button>
        <button className=" text-white font-thin px-6 py-2 rounded  hover:bg-indigo-500">
          Sign Up
        </button>
        <button className="px-4 py-2 rounded-full  hover:bg-indigo-500 text-lg">
          <MdOutlineLightMode />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
