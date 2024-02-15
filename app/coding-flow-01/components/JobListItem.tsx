import { Job } from "@prisma/client";
import React from "react";
import Image from "next/image";
import {
  faLocation,
  faEarth,
  faMoneyCheck,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge from "./Badge";
import { relativeTime, formatMoney } from "../utils/utility";

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
    <article className="flex gap-x-2 rounded-lg border border-gray-300 p-2 hover:bg-gray-50">
      <Image
        className="self-center rounded-lg"
        src={companyLogoUrl || companyLogo}
        width={100}
        height={100}
        alt="Company Logo"
      />
      <div className="flex-grow space-y-3">
        <h1 className="text-xl">{title}</h1>
        <p className="text-gray-500">{companyName}</p>
        <div className="flex items-center gap-x-2 text-gray-500">
          <FontAwesomeIcon icon={faLocation} className="h-4 w-4" />
          <p>{locationType}</p>
        </div>
        <div className="flex items-center gap-x-2 text-gray-500">
          <FontAwesomeIcon icon={faEarth} className="h-4 w-4" />
          <p>{location}</p>
        </div>
        <div className="flex items-center gap-x-2 text-gray-500">
          <FontAwesomeIcon icon={faMoneyCheck} className="h-4 w-4" />
          <p>{formatMoney(salary)}</p>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <Badge>{type}</Badge>
        <div className="flex items-center gap-x-2 text-gray-500">
          <FontAwesomeIcon icon={faClock} className="h-4 w-4" />
          <p>{relativeTime(createdAt)}</p>
        </div>
      </div>
    </article>
  );
};

export default JobListItem;
