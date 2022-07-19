import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Pilot, Team } from "../../types/driver";

interface DriverCardProps {
  driver?: Pilot;
  team: Team;
}

const TeamCard = ({ driver, team }: DriverCardProps) => {
  return (
    <div className="p-5 m-5 rounded-3xl w-80 h-fit min-h-[18rem] flex-col bg-slate-700 hover:w-[22rem] hover:min-h-[19rem] hover:m-2 transition-all">
      <Link href={`/teams/${team.id}`}>
        <a>
          <Image
            className="rounded-t-3xl rounded-b-3xl"
            src={team.logo_url}
            height={305}
            width={640}
            alt={`${team.full_name} logo`}
          />
        </a>
      </Link>
      <div className="flex flex-col px-5 pt-5">
        <Link href={`/teams/${team.id}`}>
          <a>
            <h2 className="text-slate-50 text-xl font-bold font-poppins ">
              {team.full_name}
            </h2>
          </a>
        </Link>
        <h4 className="text-slate-400 font-poppins">
          Team Chief: {team.team_chief}
        </h4>
      </div>
    </div>
  );
};

export default TeamCard;
