import React from "react";

function Features() {
  return (
    <div className=" text-center pt-10">
      <div>
        <h1 className=" text-6xl pt-9 text-cyan-600 font-logo  w-full font-bold pt-8 font-logo text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Our Features
        </h1>
      </div>
      <div className="  pt-16 grid gap-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
        <div className=" bg-[#232323] h-48 m-9 rounded-2xl pt-8 ">
          <h1 className=" text-xl font-logo">Fast Setup</h1>
          <p className="  pt-9 text-xl">
            Setup the Software in simple 4 Clicks.
          </p>
        </div>
        <div className=" bg-[#1f2933] h-48 m-9 rounded-2xl  pt-8 ">
          <h1 className=" text-xl font-logo">Cheap Price</h1>
          <p className="  pt-9 text-xl">
            One of the Cheapest Price For the Software.
          </p>
        </div>

        <div className=" bg-[#1f2933] h-48 m-9 rounded-2xl  pt-8 ">
          <h1 className=" text-xl font-logo">Fastest</h1>
          <p className="  pt-9 text-xl">
            One software is the Fastest Software Out In The Market.
          </p>
        </div>

        <div className=" bg-[#232323] h-48 m-9 rounded-2xl  pt-8 ">
          <h1 className=" text-xl font-logo">Supports Multiple Currency</h1>
          <p className="  pt-9 text-xl">
            We Accept Almost Every Popular Crypto Currency.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
