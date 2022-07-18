import { NextPage } from "next";
import React from "react";
import Containter from "../../utils/Containter";
import { PrismaClient } from "@prisma/client";
import { Pilot } from "../../types/driver";

const prisma = new PrismaClient();

const Details: NextPage = ({ driver }: any) => {
  return <Containter>
    {driver.name}
  </Containter>;
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
    fallback: false
  };
};

export const getStaticProps = async (context: any) => {
    const id = context.params.id
    const driver = await prisma.pilot.findUnique({
        where: {
            id,
        }
    })
    return {
        props: { driver }
    }
}

export default Details;
