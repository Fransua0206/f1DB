import Image from "next/image";
import React from "react";
import { Pilot, Team } from "../../types/driver";
import DriverCard from "../utils/DriverCard";

interface SingleTeamProps {
  team: Team;
  drivers: Pilot[];
}
//{ team, drivers }: SingleTeamProps

const FullpageTeam = (props: SingleTeamProps) => {
  const { team, drivers } = props;
  return (
    <>
      <div className="flex flex-col ml-10 mt-10">
        <div className="flex flex-row ">
          <div className="">
            <Image
              className="rounded-3xl"
              src={team.logo_url}
              height={305}
              width={640}
              alt={`${team.full_name} logo`}
            />
          </div>
          <div className="flex flex-row">
            <div className="ml-10  flex flex-col">
              <h1 className="text-slate-50 mb-2 text-5xl font-semibold font-poppins">
                {team.full_name}
              </h1>
              <h2 className="text-slate-400 mb-2 text-2xl">
                Based In:{" "}
                <span className="text-slate-50 font-semibold">{team.base}</span>
              </h2>
              <h2 className="text-slate-400 mb-2 text-2xl">
                Team Chief:{" "}
                <span className="text-slate-50 font-semibold">
                  {team.team_chief}
                </span>
              </h2>
              <h2 className="text-slate-400 mb-2 text-2xl">
                Technical Chief:{" "}
                <span className="text-slate-50 font-semibold">
                  {team.technical_chief}
                </span>
              </h2>
              <h2 className="text-slate-400 mb-2 text-2xl">
                Chasis:{" "}
                <span className="text-slate-50 font-semibold">
                  {team.chasis}
                </span>
              </h2>
              <h2 className="text-slate-400 mb-2 text-2xl">
                Power Unit:{" "}
                <span className="text-slate-50 font-semibold">
                  {team.power_unit}
                </span>
              </h2>
            </div>
            <div className="ml-10 flex flex-col">
              <h2 className="text-slate-400 mb-2 text-2xl">
                First Entry:{" "}
                <span className="text-slate-50 font-semibold">
                  {team.first_entry}
                </span>
              </h2>
              <h2 className="text-slate-400 mb-2 text-2xl">
                World Championships:{" "}
                <span className="text-slate-50 font-semibold">
                  {team.world_championships}
                </span>
              </h2>
              <h2 className="text-slate-400 mb-2 text-2xl">
                Highest Race Finish:{" "}
                <span className="text-slate-50 font-semibold">
                  {team.highest_race_finish}
                </span>
              </h2>
              <h2 className="text-slate-400 mb-2 text-2xl">
                Pole Positions:{" "}
                <span className="text-slate-50 font-semibold">
                  {team.pole_positions}
                </span>
              </h2>
              <h2 className="text-slate-400 mb-2 text-2xl">
                Fastest Laps:{" "}
                <span className="text-slate-50 font-semibold">
                  {team.fastest_laps}
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col">
          <h2 className="text-slate-50 text-4xl font-poppins font-semibold">
            Drivers
          </h2>
          <div className="flex flex-row">
            {drivers.map((pilot, index) => {
              return <DriverCard key={index} driver={pilot} team={team} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FullpageTeam;
