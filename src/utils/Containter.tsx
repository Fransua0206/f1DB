import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";

const Containter = ({ children }: any) => {
  return <div className="flex flex-row w-full h-full">
    <Sidebar />
    {children}
    </div>;
};

export default Containter;
