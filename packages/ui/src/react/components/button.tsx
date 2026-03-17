"use client";

import React, { ComponentProps } from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const button = cva(
  "flex items-center justify-center text-center gap-2 rounded-sm cursor-pointer !px-3.5 !py-2.5",
  {
    variants: {
      intent: {
        primary: ["bg-brand-primary text-white"],
        secondary: ["bg-white", "text-gray-800", "border-gray-400"],
      },
      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-base", "py-2", "px-4"],
      },
      // `boolean` variants are also supported!
      disabled: {
        false: null,
        true: ["opacity-50", "cursor-not-allowed"],
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        disabled: false,
        className: "hover:bg-brand-primary-foreground",
      },
      {
        intent: "secondary",
        disabled: false,
        className: "hover:bg-gray-100",
      },
      {
        intent: "primary",
        size: "medium",
        // **or** if you're a React.js user, `className` may feel more consistent:
        // className: "uppercase"
        className: "uppercase",
      },
    ],
    defaultVariants: {
      intent: "primary",
      size: "small",
      disabled: false,
    },
  },
);

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof button>;

/**
 * Primary button for user actions
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, intent, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(button({ intent, size, className }))}
        ref={ref}
        {...props}
      >
        {children || "Primary Button"}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, button };
