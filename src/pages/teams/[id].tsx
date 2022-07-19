import { NextPage } from "next";
import FullpageTeam from "../../Components/Teams/FullpageTeam";
import Containter from "../../utils/Containter";
import { PrismaClient } from "@prisma/client";
import Head from "next/head";

const prisma = new PrismaClient();

const FullTeam: NextPage = ({ team, drivers }: any) => {
  return (
    <>
      <Head>
        <title>{team.full_name}</title>
        <link rel="icon" href={team.logo_url} />
      </Head>
      <Containter>
        <FullpageTeam team={team} drivers={drivers} />
      </Containter>
    </>
  );
};

export const getStaticPaths = async () => {
  const teams = await prisma.team.findMany();

  const paths = teams.map((team) => {
    return {
      params: { id: team.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const team = await prisma.team.findUnique({
    where: {
      id,
    },
  });
  const drivers = await prisma.pilot.findMany({
    where: {
      teamId: id,
    },
  });
  return {
    props: { team, drivers },
  };
};

export default FullTeam;
