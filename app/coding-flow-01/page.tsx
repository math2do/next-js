import React from "react";
import SidebarFilter from "./components/SidebarFilter";
import JobResults from "./components/JobResults";
import { JobFilterValues } from "./utils/validation";
import prisma from "./db";
import { Metadata } from "next";
interface PageProps {
  searchParams: {
    q?: string;
    type?: string;
    location?: string;
    remote?: string;
  };
}

export function generateMetadata({
  searchParams: { q, type, location, remote },
}: PageProps): Metadata {
  type = type === "All" ? "" : type;
  location = location === "All" ? "" : location;

  return {
    title: `${getTitle({ q, type, location, remote: remote === "true" })} | Flow Jobs`,
  };
}

function getTitle({ q, type, location, remote }: JobFilterValues) {
  type = type === "All" ? "" : type;
  location = location === "All" ? "" : location;

  const titlePrefix = q
    ? `${q} jobs`
    : type
      ? `${type} developer jobs`
      : remote
        ? `Remote developer jobs`
        : "All Developer jobs";
  const titleSuffix = location ? ` in ${location}` : "";

  return `${titlePrefix}${titleSuffix}`;
}

const HomePage = async ({
  searchParams: { q, type, location, remote },
}: PageProps) => {
  const filterValues: JobFilterValues = {
    q,
    type,
    location,
    remote: remote === "true",
  };

  const distinctLocations = (await prisma.job
    .findMany({
      where: { approved: true },
      select: { location: true },
      distinct: ["location"],
    })
    .then((locations) =>
      locations.map(({ location }) => location).filter(Boolean)
    )) as string[];

  return (
    <main className="mx-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-y-5 text-center">
        <h1 className="text-xl font-extrabold capitalize tracking-tight sm:text-2xl md:text-2xl lg:text-3xl">
          {getTitle(filterValues)}
        </h1>
        <p className="mt-2 text-muted-foreground">Find your dream job</p>
      </div>
      <section className="flex flex-col gap-4 md:flex-row">
        <SidebarFilter
          distinctLocations={distinctLocations}
          defaultValuesProps={filterValues}
        />
        <JobResults filterValues={filterValues} />
      </section>
    </main>
  );
};

export default HomePage;
