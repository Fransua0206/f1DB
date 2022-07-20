import React from "react";
import Containter from "../../utils/Containter";
import { PrismaClient } from "@prisma/client";
import { Team } from "../../types/driver";
import TeamCard from "../../Components/utils/TeamCard";
import Head from "next/head";
const prisma = new PrismaClient();

const AllTeams = (props: any) => {
  const teams: Team[] = props.initialTeams;
  return (
    <>
      <Head>
        <title>All Teams</title>
      </Head>
      <Containter>
        <div className="grid gap-4 grid-cols-1 grid-rows-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {teams.map((team, index) => {
            return <TeamCard team={team} key={index} />;
          })}
        </div>
      </Containter>
    </>
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
