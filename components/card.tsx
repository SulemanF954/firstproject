import React from "react";

export interface CardProps {
  Icon: React.ElementType;
  title: string;
  description: string;
}

function Card({ Icon, title, description }: CardProps){
  return(
  <div>
      <div className="bg-transparent rounded p-4 hover:shadow-lg transition duration-300 ease-in-out">
        <Icon className="h-12 w-12 rounded bg-blue-100 mb-4 p-1.5 text-blue-500" />
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-gray-400 mt-3">{description}</p>
      </div>
  </div>)
};

export default Card;
