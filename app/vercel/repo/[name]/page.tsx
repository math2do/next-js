import React from "react";
import Link from "next/link";

type Repository = {
  id: number;
  name: string;
  full_name: string;
};

type Time = {
  datetime: string;
};

async function getTime(): Promise<Time> {
  const timeRes = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Chicago",
    {
      // cache: "no-store",
      next: {
        revalidate: 5,
      },
    }
  );
  const time: Time = await timeRes.json();
  return time;
}

async function getRepo(name: string): Promise<Repository> {
  // Permanent data
  const res = await fetch(`https://api.github.com/repos/vercel/${name}`);
  const data: Repository = await res.json();

  return data;
}

// http://localhost:3000/vercel/repo/next.js
const Home = async ({ params }: { params: { name: string } }) => {
  console.log("param:", params);

  const [data, time] = await Promise.all([getRepo(params.name), getTime()]);

  return (
    <div>
      <h1>{data.id}</h1>
      <h1>{data.name}</h1>
      <h1>{data.full_name}</h1>
      <h1>{time.datetime}</h1>
      <Link href="/vercel" className="text-muted-foreground">
        GOTO: Home
      </Link>
    </div>
  );
};

export default Home;
