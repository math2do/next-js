import React from "react";
import Link from "next/link";
import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL!);

type Quiz = {
  id: number;
  name: string;
};

async function Quiz({ id }: { id: string }) {
  const quiz: Quiz[] =
    await sql`SELECT id, name FROM public.quizzes WHERE id=${id}`;

  return <h1>{quiz[0].name}</h1>;
}

const QuizPage = ({ params }: { params: { id: string } }) => {
  return (
    <section className="mx-auto max-w-6xl text-center">
      <Quiz id={params.id} />
      <Link href="/vercel/quiz" className="underline">
        Back to Quiz
      </Link>
    </section>
  );
};

export default QuizPage;
