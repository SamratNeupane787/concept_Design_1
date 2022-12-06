import React from "react";
import Image from "next/image";
import coind from "../images/coind.png";
import forbes from "../images/forbes.png";
import yfl from "../images/yfl.png";
import cnet from "../images/cnet.png";
import businessinsider from "../images/businessinsider.png";

function SupportedBy() {
  return (
    <div>
      <div className=" text-center">
        <div className="  text-cyan-600 text-6xl  w-full font-bold pt-8 font-logo text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <h1>Featured On</h1>
        </div>
        <div className="  m-6 border-2 pt-10 flex  justify-center items-center rounded-lg border-gray-500  h-56">
          <div className=" px-5">
            <Image src={coind} width={250} height={150} />
          </div>
          <div className=" px-5">
            <Image src={forbes} width={250} height={150} />
          </div>
          <div className=" px-5">
            <Image src={businessinsider} width={250} height={150} />
          </div>

          <div className=" px-5">
            <Image src={cnet} width={250} height={150} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportedBy;
