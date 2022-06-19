import Link from "next/link";
import React from "react";
import { GiRaceCar } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";

interface SidebarItemProps {
  text: string;
  href: string;
  icon: any;
}

const SidebarItem = (props: SidebarItemProps) => {
  return (
    <Link href={props.href}>
      <a>
        <div className="m-5 p-1 rounded-3xl flex flex-row hover:text-slate-200">
          <div className="mr-3">{props.icon}</div>
          <h2 className="text-xl font-mono text-slate-500 font-semibold hover:text-slate-200 transition-all">
            {props.text}
          </h2>
        </div>
      </a>
    </Link>
  );
};

const Sidebar = () => {
  return (
    <div className="bg-slate-900 h-screen max-w-xs w-full flex flex-col">
      {/* <SidebarItem
        text="Pilotos"
        href="/pilotos"
        icon={<BsFillPersonFill color="#64748b" size={25} />}
        /> */}
      <SidebarItem
        text="Equipos"
        href="/equipos"
        icon={<GiRaceCar color="#64748b" size={25} />}
      />
    </div>
  );
};

export default Sidebar;
