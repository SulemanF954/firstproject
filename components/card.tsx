import React from "react";

export interface CardProps {
  Icon: React.ElementType;
  title: string;
  description: string;
}

function Card({ Icon, title, description }: CardProps) {
  return (
    <div>
      <div className=" ">
        <div className="bg-transparent p-4 rounded hover:shadow-lg transition-shadow duration-300">
          <Icon className="w-10 h-10 p-1 rounded bg-blue-100 mb-4 text-blue-500 text-5xl" />
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-gray-400 mt-3">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
