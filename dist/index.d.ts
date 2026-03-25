import * as class_variance_authority_types from 'class-variance-authority/types';
import React, { ComponentProps } from 'react';
import { VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';

declare const button: (props?: ({
    intent?: "primary" | "secondary" | null | undefined;
    size?: "small" | "medium" | null | undefined;
    disabled?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type ButtonProps = ComponentProps<"button"> & VariantProps<typeof button>;
/**
 * Primary button for user actions
 */
declare const Button: React.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;

declare function cn(...inputs: ClassValue[]): string;

export { Button, cn };
