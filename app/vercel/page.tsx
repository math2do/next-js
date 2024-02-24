import React from "react";
import Link from "next/link";
import Client from "./client";

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

async function getRepo(): Promise<Repository> {
  // Permanent data
  const res = await fetch(`https://api.github.com/repos/vercel/next.js`);
  const data: Repository = await res.json();

  return data;
}

// http://localhost:3000/vercel
const Home = async () => {
  const [data, time] = await Promise.all([getRepo(), getTime()]);

  let pingData = await fetch("http://localhost:3000/vercel/api"); // in local dev mode, this is not cached, but in prod build it's cached
  let json = await pingData.json();

  return (
    <div>
      <h1>{data.id}</h1>
      <h1>{data.name}</h1>
      <h1>{data.full_name}</h1>
      <h1>{time.datetime}</h1>

      <Link href="/vercel/repo/next.js" className="text-muted-foreground">
        GOTO: next.js
      </Link>

      <h1>{JSON.stringify(json)}</h1>
      <Client />
    </div>
  );
};

export default Home;
