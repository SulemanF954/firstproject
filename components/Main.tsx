"use client"
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
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident tempore incidunt natus nesciunt autem possimus ipsam a. Veritatis, odit dolor! Ea labore rem laboriosam sit. Doloribus commodi debitis quidem quia nam vel quos nesciunt?",
  },
  {
    Icon: SiVorondesign,
    title: "High quality Design",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident tempore incidunt natus nesciunt autem possimus ipsam a. Veritatis, odit dolor! Ea labore rem laboriosam sit. Doloribus commodi debitis quidem quia nam vel quos nesciunt?",
  },
  {
    Icon: TbGridDots,
    title: "Next.js 13 (Latest)",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident tempore incidunt natus nesciunt autem possimus ipsam a. Veritatis, odit dolor! Ea labore rem laboriosam sit. Doloribus commodi debitis quidem quia nam vel quos nesciunt?",
  },
  {
    Icon: IoSettings,
    title: "Tailwind CSS",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident tempore incidunt natus nesciunt autem possimus ipsam a. Veritatis, odit dolor! Ea labore rem laboriosam sit. Doloribus commodi debitis quidem quia nam vel quos nesciunt?",
  },
  {
    Icon: FaCopy,
    title: "Fully Customizable",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident tempore incidunt natus nesciunt autem possimus ipsam a. Veritatis, odit dolor! Ea labore rem laboriosam sit. Doloribus commodi debitis quidem quia nam vel quos nesciunt?",
  },
  {
    Icon: GrResources,
    title: "Free and Open Source",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident tempore incidunt natus nesciunt autem possimus ipsam a. Veritatis, odit dolor! Ea labore rem laboriosam sit. Doloribus commodi debitis quidem quia nam vel quos nesciunt?",
  },
];

const Main = () => {
  return (
    <div>
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
        <div className="grid grid-cols-3 md:grid-col-1 gap-4 mt-4">
          {cardData.map((items, index) => (
            <div key={index}>
              <Card
              Icon={items.Icon}
              description={items.description}
              title={items.title}
            />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
