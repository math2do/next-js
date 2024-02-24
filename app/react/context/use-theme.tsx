"use client";

import React from "react";
import { useThemeContext } from "./theme-context";
import { Button } from "@/components/ui/button";

const UseTheme = () => {
  const { theme, setTheme } = useThemeContext();

  return (
    <div>
      <h1>{`Current Theme: ${theme}`}</h1>
      <Button
        variant="outline"
        onClick={() => {
          setTheme("system");
        }}
      >
        Change theme to: system
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          setTheme("light");
        }}
      >
        Change theme to: light
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          setTheme("dark");
        }}
      >
        Change theme to: dark
      </Button>
    </div>
  );
};

export default UseTheme;
