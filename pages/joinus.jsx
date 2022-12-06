import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

function Socials() {
  return (
    <div>
      <div className=" text-center">
        <h1 className="  text-6xl w-full font-bold pt-8 font-logo text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Join us
        </h1>
        <div className=" flex items-center justify-center pt-10">
          <div className=" mr-6">
            <FaFacebookSquare className=" w-10 h-10  text-red-300" />
          </div>
          <div className=" mr-6">
            <FaInstagram className=" w-10 h-10  text-red-300" />
          </div>
          <div className=" mr-6">
            <FaTwitterSquare className=" w-10 h-10  text-red-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Socials;
