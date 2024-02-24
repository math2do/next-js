import React from "react";
import Link from "next/link";
import UnderlinedText from "@/components/text-underline";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/svg-icons";

import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
  PageActions,
} from "@/components/page-header";

const HomePage = () => {
  return (
    <div className="container">
      <PageHeader>
        <PageHeaderHeading>Welcome To math2do</PageHeaderHeading>
        <PageHeaderDescription>{siteConfig.description}</PageHeaderDescription>
        <PageActions>
          <Link
            href="/docs"
            className={cn(buttonVariants({ variant: "default" }))}
          >
            Explore
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </PageActions>
      </PageHeader>
    </div>
  );
};

export default HomePage;
