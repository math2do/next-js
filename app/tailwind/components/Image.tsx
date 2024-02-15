import React from "react";
import Image from "next/image";

const ImageResize = () => {
  return (
    <div className="mx-auto h-screen max-w-6xl border-2 bg-gray-100">
      {/* ImageWrapper  */}
      <div className="relative aspect-[4/2] w-full border-4 border-indigo-500">
        <Image
          className="object-cover object-center"
          src="/tailwind/beach-work.jpg"
          alt="Developer on beach"
          // based on width that image takes on different screen-size, set the vw
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          fill={true}
        />
      </div>
    </div>
  );
};

export default ImageResize;
