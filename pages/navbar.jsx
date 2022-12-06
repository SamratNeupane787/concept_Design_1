import React, { useState } from "react";
import { TfiAlignJustify, TfiClose } from "react-icons/tfi";

import styles from "../styles/Home.module.css";

function Nav() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className=" flex  justify-around h-24 max-w-[1240px] mx-auto items-center px-4">
      <h1 className=" w-full text-4xl text-white">
        Gebre<span className=" text-cyan-600">k</span>
      </h1>
      <ul className=" hidden md:flex ">
        <li className=" p-4">Home</li>
        <li className=" p-4">About</li>
        <li className=" p-4">Pricing</li>
        <li className=" p-4">Services</li>
        <li className=" p-4">Contact</li>
      </ul>

      <div onClick={handleNav} className=" block md:hidden">
        {!nav ? (
          <TfiClose size={35} className=" top-[40%]" />
        ) : (
          <TfiAlignJustify size={35} />
        )}
      </div>

      <div
        className={
          !nav
            ? " fixed left-0 top-0  w-[60%] h-full bg-[#2D3047] ease-in-out duration-500"
            : "fixed  left-[-100%] duration-300"
        }
      >
        <h1 className=" text-center pt-8 w-full text-4xl text-white">
          Gebre<span className=" text-cyan-600">k</span>
        </h1>

        <ul className=" text-center text-4xl uppercase pt-4">
          <li className=" p-4  mt-6">Home</li>
          <li className=" p-4 mt-6 ">About</li>
          <li className=" p-4 mt-6">Pricing</li>
          <li className=" p-4 mt-6">Services</li>
          <li className=" p-4 mt-6">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
