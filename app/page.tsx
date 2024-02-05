import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1 className="text-7xl">Home</h1>
      <Link href="/about" className="text-2xl">
        About Page
      </Link>
    </div>
  );
};
export default Home;
