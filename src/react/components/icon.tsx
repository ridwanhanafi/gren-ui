"use client";

import React, { ComponentProps } from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const icon = cva(
  "",
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

export type IconProps = ComponentProps<"i"> &
  VariantProps<typeof icon>;

/**
 * Primary button for user actions
 */
const Icon = React.forwardRef<HTMLButtonElement, IconProps>(
  ({ className, intent, size, ...props }, ref) => {
    return (
      <i
        className={cn(icon({ intent, size, className }))}
        ref={ref}
        {...props}
      >
      </i>
    );
  },
);

Icon.displayName = "Icon";

export default Icon;
export { icon };
