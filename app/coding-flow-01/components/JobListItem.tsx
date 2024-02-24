import { Job } from "@prisma/client";
import React from "react";
import Image from "next/image";
import Badge from "./Badge";
import { relativeTime, formatMoney } from "../utils/utility";
import { Briefcase, Globe2, Banknote, Clock } from "lucide-react";

const companyLogo = "/coding-flow-01/company-logo-placeholder.png";

interface JobListItemProps {
  job: Job;
}

const JobListItem = ({
  job: {
    title,
    companyName,
    type,
    locationType,
    location,
    salary,
    companyLogoUrl,
    createdAt,
  },
}: JobListItemProps) => {
  return (
    <article className="flex gap-x-2 rounded-lg border p-2 hover:bg-muted">
      <Image
        className="self-center rounded-lg"
        src={companyLogoUrl || companyLogo}
        width={100}
        height={100}
        alt="Company Logo"
      />
      <div className="flex-grow space-y-3">
        <h1 className="text-xl">{title}</h1>
        <p className="text-muted-foreground">{companyName}</p>
        <div className="flex items-center gap-x-2 text-muted-foreground">
          <Briefcase size={16} className="shrink-0" />
          <p>{locationType}</p>
        </div>
        <div className="flex items-center gap-x-2 text-muted-foreground">
          <Globe2 size={16} className="shrink-0" />
          <p>{location || "worldwide"}</p>
        </div>
        <div className="flex items-center gap-x-2 text-muted-foreground">
          <Banknote size={16} className="shrink-0" />
          <p>{formatMoney(salary)}</p>
        </div>
      </div>

      <div className="hidden flex-col justify-between sm:flex">
        <Badge>{type}</Badge>
        <div className="flex items-center gap-x-2 text-muted-foreground">
          <Clock size={16} className="shrink-0" />
          <p>{relativeTime(createdAt)}</p>
        </div>
      </div>
    </article>
  );
};

export default JobListItem;
