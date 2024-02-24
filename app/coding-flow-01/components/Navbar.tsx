import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 bg-background/50 shadow-md backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-3 py-5">
        <Link href="/coding-flow-01" className="flex items-center gap-3">
          <Image
            src="/coding-flow-01/logo.png"
            width={40}
            height={40}
            alt="Flow jobs logo"
          />
          <span className="text-xl font-bold tracking-tight">Flow Jobs</span>
        </Link>
        <Button asChild>
          <Link href="/coding-flow-01/jobs/new" className="capitalize">
            Post a job
          </Link>
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
