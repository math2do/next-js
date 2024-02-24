import React from "react";

const Page = () => {
  return (
    <main className="mx-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-y-5 text-center">
        <h1 className="text-xl font-extrabold capitalize tracking-tight sm:text-2xl md:text-2xl lg:text-3xl">
          Job Submitted
        </h1>
        <p className="mt-2 text-muted-foreground">
          Your job posting has been submitted and is waiting for approval.
        </p>
      </div>
    </main>
  );
};

export default Page;
