import { Box, Stack, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode, useState } from "react";

import ButtonLink from "../components/utils/ButtonLink";
import NextLink from "../components/utils/NextLink";
import NavBar from "../components/NavBar";
import Intro from "../components/Intro";
import Documents from "../components/Documents";

export default function Home() {
  const [child, setChild] = useState<object | null>(null);
  return (
    <>
      <NavBar />
      <Intro />
      <Documents />
      <Head>
        <title>Bootcamp Project Spring 2023!!!</title>
      </Head>
    </>
  );
}
