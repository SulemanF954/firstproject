"use client";
import { FaAngleDown } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import Link from "next/link";

const NavBar: React.FC = () => {
  const handleButtonClickIn = () => {
    alert("Sign In button clicked!");
  };

  const handleButtonClickUp = () => {
    alert("Sign Up button clicked!");
  };

  const handleButtonClickMode = () => {
    alert("Light Mode button clicked!");
  };

  return (
    <nav className="text-white flex justify-between border-b-blue-600 items-center fixed top-0 left-0 bg-gray-900 right-0 shadow-lg p-4 z-10">
      <div className="flex items-center space-x-2">
        <img
          src="/Image/favicon.png"
          alt="Logo"
          className="h-8 w-8 bg-black cursor-pointer"
        />
        <span className="text-xl font-bold cursor-pointer">StockUp</span>
        <ul className="flex px-20 space-x-6">
          <li className="hover:text-amber-100 cursor-pointer px-4">
            <Link href="/Home">Home</Link>
          </li>
          <li className=" hover:text-amber-100 cursor-pointer px-4">About</li>
          <li className=" hover:text-amber-500 cursor-pointer px-4">Blog</li>
          <li className=" hover:text-amber-100 cursor-pointer px-4 ">
            Support
          </li>
          <div className="flex cursor-pointer">
            <li className=" hover:text-amber-100 px-3">Pages</li>
            <FaAngleDown className="text-amber-100 pt-1 text-lg" />
          </div>
        </ul>
      </div>

      {/* Right Side: Sign In/Out Buttons */}
      <div className="mr-10 flex items-center space-x-2">
        <button
          onClick={handleButtonClickIn}
          className="bg-blue-500 rounded px-6 py-2 cursor-pointer hover:bg-indigo-500 text-white font-thin"
        >
          Sign In
        </button>
        <button
          onClick={handleButtonClickUp}
          className=" text-white font-thin cursor-pointer px-6 py-2 rounded  hover:bg-indigo-500"
        >
          Sign Up
        </button>
        <button
          onClick={handleButtonClickMode}
          className="px-4 py-2 rounded-full cursor-pointer hover:bg-indigo-500 text-lg"
        >
          <MdOutlineLightMode />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
