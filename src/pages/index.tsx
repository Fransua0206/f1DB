import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import DriverDisplay from "../Components/Home/DriverDisplay";
import Sidebar from "../Components/Sidebar/Sidebar";
import styles from "../styles/Home.module.css";
import Containter from "../utils/Containter";
import { PrismaClient } from "@prisma/client";
import { Pilot } from "../types/driver";

const prisma = new PrismaClient();

const Home: NextPage = (props) => {
  return (
    <>
    <Head>
      <title>Formula 1 Database | Cruise Level Software</title>
    </Head>
    <Containter>
      <DriverDisplay props={props} />
    </Containter>
    </>
  );
};

export async function getStaticProps() {
  const drivers = await prisma.pilot.findMany();
  const teams = await prisma.team.findMany();

  const sortedDrivers = drivers
    .sort((a, b) => 0.5 - Math.random())
    .slice(0, 10);

  return {
    props: {
      initialDrivers: sortedDrivers,
      initialScuderias: teams
    },
  };
}

export default Home;
