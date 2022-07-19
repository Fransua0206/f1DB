import { NextPage } from "next";
import React from "react";
import Containter from "../../utils/Containter";
import { PrismaClient } from "@prisma/client";
import { Pilot } from "../../types/driver";
import FullpageDriver from "../../Components/Drivers/FullpageDriver";
import Head from "next/head";

const prisma = new PrismaClient();

const FullDriver: NextPage = ({ driver, team }: any) => {
  return (
    <>
      <Head>
        <title>{`${driver.name} ${driver.surname} | ${team.full_name}`}</title>
      </Head>
      <Containter>
        <FullpageDriver driver={driver} team={team} />
      </Containter>
    </>
  );
};

export const getStaticPaths = async () => {
  const drivers = await prisma.pilot.findMany();

  const paths = drivers.map((driver) => {
    return {
      params: { id: driver.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const driver = await prisma.pilot.findUnique({
    where: {
      id,
    },
  });
  const team = await prisma.team.findUnique({
    where: {
      id: driver?.teamId,
    },
  });
  return {
    props: { driver, team },
  };
};

export default FullDriver;
