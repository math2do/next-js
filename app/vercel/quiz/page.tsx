import React, { Suspense } from "react";
import Link from "next/link";
import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL!);

type Quiz = {
  id: number;
  name: string;
};

const Quizzes = async () => {
  // deliberately adding some delay to see the fallback effect
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const quizzes: Quiz[] = await sql`SELECT id, name FROM public.quizzes;`;

  return (
    <ul>
      {quizzes.map((quiz) => {
        return (
          <li key={quiz.id}>
            <Link href={`/vercel/quiz/${quiz.id}`} className="underline">
              {quiz.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const Home = () => {
  return (
    <section className="mx-auto max-w-6xl border-2 text-center">
      <h1>All Quizes</h1>

      {/* Quiz can take sometime to load, So suspend it and show other components, 
      when it's ready till then show the fallback. Fallback can be skeleton, or any react component */}
      <Suspense fallback={<p>Loading...</p>}>
        <Quizzes />
      </Suspense>
    </section>
  );
};

export default Home;
