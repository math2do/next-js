import React from "react";

const Hero = () => {
  return (
    <>
      <div className="relative mx-auto grid h-80 max-w-6xl  md:grid-cols-2">
        {/* blurr background */}
        <div className="absolute right-1/2 top-1/2 -z-10 h-80 w-80 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-10 blur-xl"></div>

        <div className="top-30 absolute left-1/2 -z-10 h-60 w-60 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-10 blur-xl"></div>

        <div className="flex h-full w-full items-center justify-center px-2">
          <div className="w-full text-center">
            <h1 className="text-2xl">
              Wel<span className="underlined">come To math</span>2do
            </h1>
            <p className="mt-6 leading-7">
              This is an attempt to share my thoughts, skills I have acquired
              over years as a software engineer. Through this I aim to connect
              with other developers and develop a community.
            </p>
          </div>
        </div>
        <div className="my-6 flex h-full w-full items-center justify-center px-2 md:my-0">
          <h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
            recusandae accusantium facere ipsa necessitatibus nulla voluptas a
            enim temporibus aperiam accusamus hic, sed ut pariatur fugiat neque
            sequi, rem nesciunt quae cumque reiciendis aliquid. Eius illum
            nostrum optio accusamus, voluptatibus autem reiciendis sit corporis
            id unde. Consectetur amet facilis ipsa!
          </h1>
        </div>
      </div>
      <div className="h-48 bg-primary-50"></div>
    </>
  );
};

export default Hero;
