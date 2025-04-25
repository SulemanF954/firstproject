import React from "react";

export interface LineProps {
  Icon: React.ElementType;
  title: string;
}

const LineSet = ({ Icon, title }: LineProps) => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 my-4">
      <div className="flex flex-row justify-center items-center gap-3 sm:gap-4">
        <Icon className="text-2xl sm:text-3xl md:text-4xl text-blue-500" />
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default LineSet;
