import React from "react";


export interface LineProps {
  Icon: React.ElementType;
  title: string;
}

const LineSet = ({ Icon, title }: LineProps) => {
  return (
    <div>
         <div className="flex flex-row justify-center items-center">
            <Icon className="text-3xl" />
            <h1 className="text-xl">{title}</h1>
          </div>
    </div>
  );
};

export default LineSet;
