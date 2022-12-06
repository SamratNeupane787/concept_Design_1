import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "./navbar";
import Intro from "./introsection";
import Company from "./company";
import Features from "./features";
import Crypto from "./currency";
import SupportedBy from "./supported";
import Socials from "./joinus";
import FinalSec from "./final";
import Copyright from "./copyright";

export default function Home() {
  return (
    <div>
      <Nav />
      <Intro />
      <Company className=" pt-96" />
      <Features />
      <Crypto />
      <SupportedBy />
      <Socials />
      <FinalSec />
      <Copyright />
    </div>
  );
}
