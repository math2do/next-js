import React from "react";
import Image from "next/image";

const WorkLocation = () => {
  return (
    <div className="mx-auto h-screen max-w-6xl border-2 bg-gray-100">
      {/* worklocation */}
      <div className="mx-3 my-3">
        <Image
          src="/tailwind/logo.svg"
          width={300}
          height={40}
          alt="Picture of the author"
        />

        <Image
          className="mt-6 w-full rounded-md shadow-xl"
          src="/tailwind/beach-work.jpg"
          width={300}
          height={40}
          alt="Picture of the author"
        />

        <h1 className="mt-6 text-2xl font-semibold">
          You can work from anywhere.
          <br />
          <span className="text-indigo-500">Take advantage of it.</span>
        </h1>
      </div>
    </div>
  );
};

export default WorkLocation;
