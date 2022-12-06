import React from "react";
import Image from "next/image";
import google from "../images/google.png";
import ahref from "../images/ahref.png";
import meta from "../images/meta.png";
import apple from "../images/apple.png";

function Company() {
  return (
    <div className=" w-full mt-16 text-center">
      <h1 className=" text-6xl pt-9 text-cyan-600 font-logo  w-full font-bold pt-8 font-logo text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        {" "}
        Trusted By
      </h1>
      <div className=" flex justify-center items-center ">
        <div className=" grid items-center gap-4 content-center mr-6 ml-6 lg:grid-cols-4 pt-6  md:grid-cols-3 pt-10 sm: grid-cols-1 pt-14">
          <div className=" shadow-2xl">
            <Image src={google} width={250} height={250} />
          </div>

          <div>
            <Image src={ahref} width={250} height={250} />
          </div>
          <div>
            <Image src={meta} width={250} height={250} />
          </div>

          <div>
            <Image src={apple} width={250} height={250} className=" ml-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
