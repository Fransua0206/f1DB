import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { TbSteeringWheel } from "react-icons/tb";
import { GiRaceCar } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div className="bg-slate-900 h-max min-h-screen max-w-[4rem] w-full flex items-center flex-col">
      <div className="p-2">
        <Link href={"/"}>
          <a>
            <AiFillHome size={35} color="white" />
          </a>
        </Link>
      </div>
      <div className="p-2">
        <Link href={"/drivers"}>
          <a>
            <TbSteeringWheel size={35} color="white" />
          </a>
        </Link>
      </div>
      <div className="p-2">
        <Link href={"/teams"}>
          <a>
            <GiRaceCar size={35} color="white" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
