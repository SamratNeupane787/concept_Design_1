import React from "react";

function Intro() {
  return (
    <div className=" text-center py-18">
      <h1 className=" w-full mt-14 lg:text-7xl md: text-6xl sm:text-4xl">
        Web 3 Generation
      </h1>
      <h1 className=" w-full font-bold pt-8 font-logo text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 lg:text-7xl md: text-6xl sm:text-4xl">
        {" "}
        Best Tech In the Game
      </h1>
      <p className=" text-xl pt-8 m-6 tracking-wider">
        Gebrek is an Web 3 based payment service which helps to send payment
        faster, <br />
        Just setup the system once and you are all set.
        <span className=" mt-4 "> Just Couple of minutes to Setup </span>.
      </p>
    </div>
  );
}

export default Intro;
