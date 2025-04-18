import React from "react";
import { MdFormatBold } from "react-icons/md";
import { FaUikit } from "react-icons/fa";
import { SiGridsome } from "react-icons/si";
import { FaLine } from "react-icons/fa";
import { MdOutlineGraphicEq } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";

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
