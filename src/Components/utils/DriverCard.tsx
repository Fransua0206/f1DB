import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Pilot, Team } from "../../types/driver";

interface DriverCardProps {
  driver: Pilot;
  team: Team;
}

const DriverCard = ({ driver, team }: DriverCardProps) => {
  return (
    <div className="p-5 m-5 rounded-3xl w-80 h-fit min-h-[30rem] flex-col bg-slate-700 hover:w-[22rem] hover:min-h-[31rem] hover:m-2 transition-all">
      <Link href={`/drivers/${driver.id}`}>
        <a>
          <Image
            className="rounded-t-3xl rounded-b-3xl"
            src={driver.picture_url}
            alt={`driver ${driver.driver_number} ${driver.name} ${driver.surname}`}
            height={"300px"}
            width={"320px"}
          />
        </a>
      </Link>
      <div className="flex flex-col px-5 pt-5">
        <Link href={`/drivers/${driver.id}`}>
          <a>
            <h2 className="text-slate-50 text-xl font-bold font-poppins ">
              {driver.name}
            </h2>
            <h3 className="text-slate-200 text-2xl font-semibold font-poppins">
              {driver.surname.toUpperCase()}
            </h3>
          </a>
        </Link>
        <h4 className="text-slate-400 font-poppins">
          Driver Number: {driver.driver_number}
        </h4>
        <h4 className="text-slate-400 font-poppins">
          Drives for:{" "}
          <Link href={`/teams/${team.id}`}>
            <a className="text-slate-300">{team.full_name}</a>
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default DriverCard;
