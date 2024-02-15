const { placeholderJobs } = require("./placeholder-data");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await Promise.all(
    placeholderJobs.map(async (job) => {
      await prisma.job.upsert({
        where: {
          slug: job.slug,
        },
        update: job,
        create: job,
      });
    })
  );
}

// call above function
main()
  .then(async () => {
    console.log("DONE!!");
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.log("Error while seeding data:", err);
    await prisma.$disconnect();
    process.exit(1);
  });