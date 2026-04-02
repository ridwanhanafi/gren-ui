import { ComponentProps, forwardRef } from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const button = cva(
  "flex items-center justify-center text-center gap-2 rounded-sm cursor-pointer !px-3.5 !py-2.5",
  {
    variants: {
      variant: {
        primary: ["bg-brand-primary", "text-white"],
        secondary: ["bg-brand-secondary", "text-black", "dark:text-white"],
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
        variant: "primary",
        disabled: false,
        className: "hover:brightness-90",
      },
      {
        variant: "secondary",
        disabled: false,
        className: "hover:brightness-90",
      },
      {
        variant: "primary",
        size: "medium",
        // **or** if you're a React.js user, `className` may feel more consistent:
        // className: "uppercase"
        className: "uppercase",
      },
    ],
    defaultVariants: {
      variant: "primary",
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
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(button({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children || "Primary Button"}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
export { button };
