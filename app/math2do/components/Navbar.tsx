"use client";

import React from "react";
import { Terminal } from "lucide-react";
import { Github } from "lucide-react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { setTheme } = useTheme();

  return (
    <section className="w-full">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-md p-2">
        {/* logo */}
        <Link href="/math2do">
          <div className="flex cursor-pointer items-end">
            <Terminal />
            <h1 className="text-xl font-bold">
              <span className="text-primary">math</span>
              <span>2do</span>
            </h1>
          </div>
        </Link>

        {/* right side of nav  */}
        <div className="flex items-center">
          {/* github link  */}
          <Button variant="ghost" size="icon">
            <a href="https://github.com/math2do">
              <Github className="h-4 w-4" />
            </a>
          </Button>

          {/* Dark mode toggler */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => {
                  setTheme("light");
                }}
              >
                Light
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setTheme("dark");
                }}
              >
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setTheme("system");
                }}
              >
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
      <div className="h-[0.5px] w-full bg-muted"></div>
    </section>
  );
};

export default Navbar;
