import React from "react";
import ThemeContextProvider from "./theme-context";
import UseTheme from "./use-theme";

const ReactConcepts = () => {
  return (
    <div className="mx-auto max-w-6xl border-2">
      {/* Component added in this would recieve null context  */}
      <ThemeContextProvider>
        <UseTheme />
      </ThemeContextProvider>
    </div>
  );
};

export default ReactConcepts;
