import React from "react";
import prisma from "./db";
import JobListItem from "./components/JobListItem";
import SidebarFilter from "./components/SidebarFilter";

const HomePage = async () => {
  const jobs = await prisma.job.findMany({
    where: { approved: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="mx-auto max-w-6xl border-2 p-4 md:p-0">
      <div className="my-6 w-full text-center">
        <h1 className="text-3xl font-extrabold">Developer Jobs</h1>
        <p className="mt-2 text-gray-500">Find your dream job</p>
      </div>
      <section className="flex flex-col md:flex-row">
        <SidebarFilter />
        <div className="flex-grow">
          <div className="flex flex-col gap-y-2">
            {jobs.map((job) => {
              return <JobListItem key={job.id} job={job} />;
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
