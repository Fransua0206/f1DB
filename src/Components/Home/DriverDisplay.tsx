import React from "react";
import { Pilot, Team } from "../../types/driver";
import Image from "next/image";
import Link from "next/link";

const DriverDisplay = (props: any) => {
  const drivers: Pilot[] = props.props.initialDrivers.slice(0, 10);
  const teams: Team[] = props.props.initialScuderias;

  const getTeam = (teamId: string): Team | undefined => {
    const team = teams.find((team) => team.id === teamId);
    return team;
  };

  return (
    <>
      <div className="grid gap-4 grid-cols-5 grid-rows-2">
        {drivers.map((pilot, index) => {
          return (
            <div
              key={index}
              className="p-5 m-5 rounded-3xl w-80 h-fit min-h-[30rem] flex-col bg-slate-700 hover:w-[22rem] hover:min-h-[31rem] hover:m-2 transition-all"
            >
              <Image
                className="rounded-t-3xl rounded-b-3xl"
                src={pilot.picture_url}
                alt={`driver ${pilot.driver_number} ${pilot.name} ${pilot.surname}`}
                height={"300px"}
                width={"320px"}
              />
              <div className="flex flex-col px-5 pt-5">
                <Link href={`/drivers/${pilot.id}`}>
                  <a>
                    <h2 className="text-slate-50 text-xl font-bold font-poppins ">
                      {pilot.name}
                    </h2>
                    <h3 className="text-slate-200 text-2xl font-semibold font-poppins">
                      {pilot.surname.toUpperCase()}
                    </h3>
                  </a>
                </Link>
                <h4 className="text-slate-400 font-poppins">
                  Driver Number: {pilot.driver_number}
                </h4>
                <h4 className="text-slate-400 font-poppins">
                  Drives for:{" "}
                  <Link href={`/teams/${getTeam(pilot.teamId)?.id}`}>
                    <a className="text-slate-300">
                      {getTeam(pilot.teamId)?.full_name}
                    </a>
                  </Link>
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DriverDisplay;
