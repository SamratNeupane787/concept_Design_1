import React from "react";

function FinalSec() {
  return (
    <div className=" pt-16 pb-16 m-6 border-t-2 border-gray-600">
      <div className="  flex  justify-around h-24 max-w-[1240px] mx-auto items-center px-4">
        <div className=" text-left">
          <h1 className=" text-3xl">
            Gebre<span className=" text-cyan-600">K</span>
          </h1>
        </div>

        <div>
          <ul className=" mr-6 text-gray-400">
            <li className=" pt-4">Home</li>
            <li className=" pt-4">Team</li>
            <li className=" pt-4">Carrer</li>
          </ul>
        </div>

        <div>
          <ul className=" mr-6 text-gray-400">
            <li className=" pt-4">About</li>
            <li className=" pt-4">Coupons</li>
            <li className=" pt-4">Transfer</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FinalSec;
