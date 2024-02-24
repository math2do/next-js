"use server";
import { redirect } from "next/navigation";
import { createJobSchema } from "./utils/validation";
import { toSlug } from "./utils/utility";
import { nanoid } from "nanoid";
import { put } from "@vercel/blob";
import path from "path";
import prisma from "./db";
import { revalidatePath } from "next/cache";

export const SubmitFormAction = async (URL: string) => {
  redirect(URL);
};

export const createJobPosting = async (formData: FormData) => {
  const values = Object.fromEntries(formData.entries());

  // re-validate post data in backend
  const {
    title,
    type,
    companyName,
    companyLogo,
    locationType,
    location,
    applicationEmail,
    applicationUrl,
    description,
    salary,
  } = createJobSchema.parse(values);

  const slug = `${toSlug(title)}-${nanoid(10)}`;

  let companyLogoUrl: string | undefined = undefined;
  if (companyLogo) {
    const blob = await put(
      `company_logo/${slug}/${path.extname(companyLogo.name)}`,
      companyLogo,
      {
        access: "public",
        addRandomSuffix: false,
      }
    );

    companyLogoUrl = blob.url;
  }

  // create job
  await prisma.job.create({
    data: {
      slug,
      title: title.trim(),
      type,
      companyName: companyName.trim(),
      companyLogoUrl,
      locationType,
      location,
      applicationEmail: applicationEmail?.trim(),
      applicationUrl: applicationUrl?.trim(),
      description: description?.trim(),
      salary: parseInt(salary),
    },
  });

  redirect("/coding-flow-01/job-submitted");
};
