"use client";
import React from "react";
import { FaCopy } from "react-icons/fa";
import { GrResources } from "react-icons/gr";
import { IoSettings } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { SiVorondesign } from "react-icons/si";
import { TbGridDots } from "react-icons/tb";
import Card, { CardProps } from "./Card";

const cardData: CardProps[] = [
  {
    Icon: MdDashboard,
    title: "Crafted for StartUps",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste",
  },
  {
    Icon: SiVorondesign,
    title: "High quality Design",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste",
  },
  {
    Icon: TbGridDots,
    title: "Next.js 13 (Latest)",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste",
  },
  {
    Icon: IoSettings,
    title: "Tailwind CSS",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste",
  },
  {
    Icon: FaCopy,
    title: "Fully Customizable",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste",
  },
  {
    Icon: GrResources,
    title: "Free and Open Source",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste",
  },
];

const Main = () => {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-8">
      <div className="flex justify-center items-center">
        <div className="text-center bg-transparent p-4 rounded max-w-3xl">
          <h2 className="text-2xl md:text-3xl text-amber-50 font-bold mb-4">
            Main Features
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, in the middle of
            the text.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {cardData.map((items, index) => (
            <Card
              key={index}
              Icon={items.Icon}
              description={items.description}
              title={items.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
