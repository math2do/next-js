import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const underlineVariants = cva(
  "after:content-['']; relative text-5xl after:absolute after:-bottom-[0.2em] after:left-1/2 after:h-[0.15em] after:w-[80%] after:-translate-x-1/2 after:rounded-sm after:bg-primary",
  {
    variants: {
      width: {
        10: "after:w-[10%]",
        20: "after:w-[20%]",
        30: "after:w-[30%]",
        40: "after:w-[40%]",
        50: "after:w-[50%]",
        60: "after:w-[60%]",
        70: "after:w-[70%]",
        80: "after:w-[80%]",
        90: "after:w-[90%]",
        100: "after:w-[100%]",
      },
      height: {
        default: "after:h-[0.10em]",
        sm: "after:h-[0.07em]",
        md: "after:h-[0.14em]",
        lg: "after:h-[0.21em]",
      },
    },
    defaultVariants: {
      height: "default",
      width: 70,
    },
  }
);

interface UnderlinedProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof underlineVariants> {}

const UnderlinedText = ({
  className,
  height,
  width,
  children,
  ...props
}: UnderlinedProps) => {
  return (
    <h1
      className={cn(underlineVariants({ height, width, className }))}
      {...props}
    >
      {children}
    </h1>
  );
};

export default UnderlinedText;
