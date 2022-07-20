import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Pilot, Team } from "../../types/driver";

interface SingleDriverProps {
  driver: Pilot;
  team: Team;
}

const FullpageDriver = ({ driver, team }: SingleDriverProps) => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col items-center lg:flex-row">
        <div className="ml-10 mt-10">
          <Image
            className="rounded-3xl"
            src={driver.picture_url}
            height={500}
            width={500}
            alt={`${driver.name} ${driver.surname} big`}
          />
        </div>
        <div className="m-10 flex flex-col">
          <div className="flex flex-row justify-center">
            <div className="mr-5">
              <Image
                src={`https://countryflagsapi.com/png/${driver.country.toLowerCase()}`}
                height={56}
                width={80}
                alt={`${driver.country} flag`}
              />
            </div>
            <div>
              <h2 className="text-slate-50 text-5xl font-bold font-poppins ">
                {driver.name}
              </h2>
              <h3 className="text-slate-50 text-6xl font-semibold font-poppins">
                {driver.surname.toUpperCase()}
              </h3>
            </div>
          </div>
          <div className="mt-10 flex flex-row">
            <div className="flex flex-col">
              <h2 className="text-slate-400 mb-2 text-3xl font-poppins font-semibold">
                Driver Number:{" "}
                <span className="text-slate-50 font-bold">
                  {driver.driver_number}
                </span>
              </h2>
              <h2 className="text-slate-400 mb-2 text-3xl font-poppins font-semibold">
                Drives for:{" "}
                <Link href={`/teams/${team.id}`}>
                  <a>
                    <span className="text-slate-50 font-bold">
                      {team.full_name}
                    </span>
                  </a>
                </Link>
              </h2>
              <h2 className="text-slate-400 mb-2 text-3xl font-poppins font-semibold">
                Birth Date:{" "}
                <span className="text-slate-50 font-bold">{driver.birth}</span>
              </h2>
              <h2 className="text-slate-400 mb-2 text-3xl font-poppins font-semibold">
                Birth Place:{" "}
                <span className="text-slate-50 font-bold">
                  {driver.birth_place}
                </span>
              </h2>
              <h2 className="text-slate-400 mb-2 text-3xl font-poppins font-semibold">
                Is From:{" "}
                <span className="text-slate-50 font-bold">
                  {driver.country}
                </span>
              </h2>
              <h2 className="text-slate-400 mb-2 text-3xl font-poppins font-semibold">
                Has:{" "}
                <span className="text-slate-50 font-bold">
                  {driver.podiums} Podiums
                </span>
              </h2>
            </div>
            <div className="flex flex-col ml-10">
              <h2 className="text-slate-400 mb-2 text-3xl font-poppins font-semibold">
                Total Points:{" "}
                <span className="text-slate-50 font-bold">
                  {driver.total_points}
                </span>
              </h2>
              <h2 className="text-slate-400 mb-2 text-3xl font-poppins font-semibold">
                Total GPs Entered:{" "}
                <span className="text-slate-50 font-bold">
                  {driver.gps_entered}
                </span>
              </h2>
              <h2 className="text-slate-400 mb-2 text-3xl font-poppins font-semibold">
                World Championships:{" "}
                <span className="text-slate-50 font-bold">
                  {driver.world_championships}
                </span>
              </h2>
              <h2 className="text-slate-400 mb-2 text-3xl font-poppins font-semibold">
                Highest Race Finish:{" "}
                <span className="text-slate-50 font-bold">
                  {driver.highest_race_finish}
                </span>
              </h2>
              <h2 className="text-slate-400 mb-2 text-3xl font-poppins font-semibold">
                Highest Qualifying Position:{" "}
                <span className="text-slate-50 font-bold">
                  {driver.highest_grid}
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row ml-10 mt-10 max-w-[96rem]">
        <h2 className="text-slate-200 font-medium text-xl">{driver.bio}</h2>
      </div>
    </div>
  );
};

export default FullpageDriver;
