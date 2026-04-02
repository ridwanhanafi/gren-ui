import { ComponentProps, forwardRef } from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const select = cva(
  [
    "w-full min-w-0 rounded-md border transition-colors",
    "focus:outline-none focus:ring-2",

    // LIGHT MODE
    "bg-white text-black border-gray-300 placeholder:text-gray-400",
    "focus:ring-brand-primary",

    // DARK MODE
    "dark:bg-zinc-900 dark:text-white dark:border-zinc-700",
    "dark:placeholder:text-zinc-400",
    "dark:focus:ring-brand-primary",

    // INVALID
    "aria-invalid:ring-destructive/40 dark:aria-invalid:ring-destructive/60",
  ],
  {
    variants: {
      variant: {
        primary: ["rounded-md"],
        secondary: ["rounded-sm"],
      },
      size: {
        small: ["text-sm", "py-2", "px-2"],
        medium: ["text-base", "py-2.5", "px-3"],
      },
      // `boolean` variants are also supported!
      disabled: {
        false: null,
        true: ["opacity-50", "pointer-events-none"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
      disabled: false,
    },
  },
);

type Option = {
  label: string;
  value: string;
};

export type SelectProps = ComponentProps<"select"> &
  VariantProps<typeof select> & {
    options?: Option[]
  };

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, variant, size, options, children, ...props }, ref) => {
    return (
      <select
        defaultValue=""
        className={cn(select({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <option value="" disabled>
          Pilih data
        </option>

        {options
          ? options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))
          : children}
      </select>
    );
  },
);

Select.displayName = "Select";

export default Select;
export { select };
