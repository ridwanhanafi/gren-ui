import * as react from 'react';
import { ComponentProps } from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';

declare const button: (props?: ({
    variant?: "primary" | "secondary" | null | undefined;
    size?: "small" | "medium" | null | undefined;
    disabled?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type ButtonProps = ComponentProps<"button"> & VariantProps<typeof button>;
/**
 * Primary button for user actions
 */
declare const Button: react.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & react.RefAttributes<HTMLButtonElement>>;

type IconProps = React.ComponentProps<"i"> & {
    name: string;
};
declare const Icon: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<HTMLElement>>;

declare const input: (props?: ({
    variant?: "primary" | "secondary" | null | undefined;
    size?: "small" | "medium" | null | undefined;
    disabled?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type BaseInputProps = Omit<ComponentProps<"input">, "size">;
type InputProps = BaseInputProps & VariantProps<typeof input>;
declare const Input: react.ForwardRefExoticComponent<Omit<InputProps, "ref"> & react.RefAttributes<HTMLInputElement>>;

declare const label: (props?: ({
    variant?: "primary" | "secondary" | null | undefined;
    size?: "small" | "medium" | null | undefined;
    disabled?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type LabelProps = ComponentProps<"label"> & VariantProps<typeof label>;
declare const Label: react.ForwardRefExoticComponent<Omit<LabelProps, "ref"> & react.RefAttributes<HTMLLabelElement>>;

declare const select: (props?: ({
    variant?: "primary" | "secondary" | null | undefined;
    size?: "small" | "medium" | null | undefined;
    disabled?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type Option = {
    label: string;
    value: string;
};
type SelectProps = ComponentProps<"select"> & VariantProps<typeof select> & {
    options?: Option[];
};
declare const Select: react.ForwardRefExoticComponent<Omit<SelectProps, "ref"> & react.RefAttributes<HTMLSelectElement>>;

declare const textarea: (props?: ({
    variant?: "primary" | "secondary" | null | undefined;
    size?: "small" | "medium" | null | undefined;
    disabled?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type TextareaProps = ComponentProps<"textarea"> & VariantProps<typeof textarea>;
declare const Textarea: react.ForwardRefExoticComponent<Omit<TextareaProps, "ref"> & react.RefAttributes<HTMLTextAreaElement>>;

declare const spinner: (props?: ({
    variant?: "primary" | "secondary" | null | undefined;
    size?: "small" | "medium" | "large" | null | undefined;
    disabled?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type SpinnerProps = ComponentProps<"div"> & VariantProps<typeof spinner>;
declare const Spinner: react.ForwardRefExoticComponent<Omit<SpinnerProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

declare const badge$1: (props?: ({
    variant?: "gray" | "red" | "yellow" | "green" | "blue" | "indigo" | "purple" | "pink" | null | undefined;
    size?: "small" | "medium" | null | undefined;
    disabled?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type BadgeProps = ComponentProps<"span"> & VariantProps<typeof badge$1>;
declare const Badge: react.ForwardRefExoticComponent<Omit<BadgeProps, "ref"> & react.RefAttributes<HTMLSpanElement>>;

declare const alertBase: (props?: ({
    variant?: "gray" | "red" | "yellow" | "green" | "blue" | "indigo" | "purple" | "pink" | null | undefined;
    size?: "small" | "medium" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const badge: (props?: ({
    variant?: "gray" | "red" | "yellow" | "green" | "blue" | "indigo" | "purple" | "pink" | null | undefined;
    size?: "small" | "medium" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const messageCn: (props?: class_variance_authority_types.ClassProp | undefined) => string;
type AlertProps = ComponentProps<"div"> & VariantProps<typeof alertBase> & VariantProps<typeof badge> & VariantProps<typeof messageCn> & {
    title?: React.ReactNode;
    message?: React.ReactNode;
    onClose?: () => void;
    duration?: number;
};
declare const Alert: react.ForwardRefExoticComponent<Omit<AlertProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

declare function cn(...inputs: ClassValue[]): string;

export { Alert, Badge, Button, Icon, Input, Label, Select, Spinner, Textarea, cn };
