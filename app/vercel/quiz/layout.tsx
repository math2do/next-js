import React from "react";

const NestedLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <nav>
      <h1>This is my navigation</h1>
      {children}
    </nav>
  );
};

export default NestedLayout;
