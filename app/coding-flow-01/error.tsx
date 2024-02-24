"use client";

export default function Error() {
  return (
    <main className="mx-auto my-10 max-w-5xl space-y-10 border-2 px-3">
      <div className="space-y-5 border-2 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
          Error
        </h1>
        <p className="mt-2 text-muted-foreground">
          An unexpected error occured
        </p>
      </div>
    </main>
  );
}
