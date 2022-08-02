import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { SearchBar } from "../components/SearchBar";
import { Statistic } from "../components/Statistic";
const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center ">
      <Statistic></Statistic>
      <SearchBar></SearchBar>
    </div>
  );
};

export default Home;
