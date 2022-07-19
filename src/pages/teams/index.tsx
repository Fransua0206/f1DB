import React from "react";
import Containter from "../../utils/Containter";
import { PrismaClient } from "@prisma/client";
import { Team } from "../../types/driver";
import TeamCard from "../../Components/utils/TeamCard";
const prisma = new PrismaClient();

const AllTeams = (props: any) => {
  const teams: Team[] = props.initialTeams;
  return (
    <Containter>
      <div className="grid grid-cols-5 grid-rows-2">
        {teams.map((team, index) => {
          return <TeamCard team={team} key={index} />;
        })}
      </div>
    </Containter>
  );
};

export async function getStaticProps() {
  const teams = await prisma.team.findMany();

  return {
    props: {
      initialTeams: teams,
    },
  };
}

export default AllTeams;
