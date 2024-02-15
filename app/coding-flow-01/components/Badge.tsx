import React from "react";

interface BadgeProps {
  children: React.ReactNode;
}

const Badge = ({ children }: BadgeProps) => {
  return (
    <span className="rounded border bg-gray-200 px-2 py-0.5 text-gray-600">
      {children}
    </span>
  );
};

export default Badge;
