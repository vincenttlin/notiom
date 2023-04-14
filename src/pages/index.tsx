import Head from "next/head";

import NavBar from "../components/NavBar";
import Intro from "../components/Intro";
import Documents from "../components/Documents";

export default function Home() {
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


