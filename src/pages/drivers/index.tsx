import React from "react";
import Containter from "../../utils/Containter";
import { PrismaClient } from "@prisma/client";
import { Pilot, Team } from "../../types/driver";
import DriverCard from "../../Components/utils/DriverCard";
import Head from "next/head";

const prisma = new PrismaClient();

const AllDrivers = (props: any) => {
  const drivers: Pilot[] = props.initialDrivers;
  const teams: Team[] = props.initialTeams;

  return (
    <>
    <Head>
        <title>All Drivers</title>
    </Head>
    <Containter>
      <div className="grid gap-4 grid-cols-1 grid-rows-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {drivers.map((driver, index) => {
            const team = teams.find((team) => team.id === driver.teamId)!
            return <DriverCard key={index} driver={driver} team={team} />;
        })}
      </div>
    </Containter>
        </>
  );
};

export async function getStaticProps() {
  const drivers = await prisma.pilot.findMany();
  const teams = await prisma.team.findMany();
  return {
    props: {
      initialDrivers: drivers,
      initialTeams: teams,
    },
  };
}

export default AllDrivers;
