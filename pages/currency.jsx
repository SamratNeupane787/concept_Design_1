import React from "react";
import Image from "next/image";
import bit from "../images/bit.png";
import eth from "../images/eth.svg";
import sol from "../images/sol.png";
import bc from "../images/bc.png";
import lite from "../images/lite.png";

function Crypto() {
  return (
    <div>
      <div>
        <div className=" text-center text-5xl font-logo w-full font-bold pt-8 font-logo text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pt-10">
          <h1>Supported Currency</h1>
        </div>
        <div className=" flex items-center justify-center m-14">
          <div className=" mr-8 ">
            <Image src={bit} width={150} height={150} />
          </div>
          <div className=" mr-8">
            <Image src={eth} width={150} height={150} />
          </div>
          <div className=" mr-8">
            <Image src={sol} width={150} height={150} />
          </div>
          <div className=" mr-8">
            <Image src={bc} width={150} height={150} />
          </div>

          <div className=" mr-8">
            <Image src={lite} width={150} height={150} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crypto;
