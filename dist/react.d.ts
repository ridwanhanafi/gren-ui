import * as react from 'react';
import { ComponentProps, ReactNode } from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import * as react_jsx_runtime from 'react/jsx-runtime';
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
type BaseInputProps$1 = Omit<ComponentProps<"input">, "size">;
type InputProps = BaseInputProps$1 & VariantProps<typeof input>;
declare const Input: react.ForwardRefExoticComponent<Omit<InputProps, "ref"> & react.RefAttributes<HTMLInputElement>>;

declare const inputGroupVariants: (props?: ({
    size?: "small" | "medium" | null | undefined;
    disabled?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type BaseInputProps = Omit<ComponentProps<"input">, "size" | "disabled">;
interface InputGroupProps extends BaseInputProps, VariantProps<typeof inputGroupVariants> {
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    containerClassName?: string;
}
declare const InputGroup: react.ForwardRefExoticComponent<Omit<InputGroupProps, "ref"> & react.RefAttributes<HTMLInputElement>>;

declare const label: (props?: ({
    variant?: "primary" | "secondary" | null | undefined;
    size?: "small" | "medium" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type LabelProps = ComponentProps<"label"> & VariantProps<typeof label>;
declare const Label: react.ForwardRefExoticComponent<Omit<LabelProps, "ref"> & react.RefAttributes<HTMLLabelElement>>;

declare const select: (props?: ({
    variant?: "primary" | "secondary" | null | undefined;
    size?: "small" | "medium" | null | undefined;
    disabled?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const SelectOption: ({ className, ...props }: ComponentProps<"option">) => react_jsx_runtime.JSX.Element;
type SelectProps = ComponentProps<"select"> & VariantProps<typeof select>;
type SelectComponent = typeof SelectMain & {
    Option: typeof SelectOption;
};
declare const SelectMain: react.ForwardRefExoticComponent<Omit<SelectProps, "ref"> & react.RefAttributes<HTMLSelectElement>>;
declare const Select: SelectComponent;

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
} & class_variance_authority_types.ClassProp) | undefined) => string;
type SpinnerProps = ComponentProps<"div"> & VariantProps<typeof spinner>;
declare const Spinner: react.ForwardRefExoticComponent<Omit<SpinnerProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

declare const badge$1: (props?: ({
    variant?: "gray" | "red" | "yellow" | "green" | "blue" | "indigo" | "purple" | "pink" | null | undefined;
    size?: "small" | "medium" | null | undefined;
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

declare const modal: (props?: ({
    position?: "center" | "topLeft" | "topCenter" | "topRight" | "centerLeft" | "centerRight" | "bottomLeft" | "bottomCenter" | "bottomRight" | null | undefined;
    disabled?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const contentVariants: (props?: ({
    size?: "small" | "medium" | "large" | "full" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type ContentProps = ComponentProps<"div"> & VariantProps<typeof contentVariants>;
declare const ModalContent: ({ className, size, ...props }: ContentProps) => react_jsx_runtime.JSX.Element;
declare const ModalHeader: ({ className, ...props }: ComponentProps<"div">) => react_jsx_runtime.JSX.Element;
declare const ModalBody: ({ className, ...props }: ComponentProps<"div">) => react_jsx_runtime.JSX.Element;
declare const ModalFooter: ({ className, ...props }: ComponentProps<"div">) => react_jsx_runtime.JSX.Element;
type ModalComponent = typeof ModalMain & {
    Content: typeof ModalContent;
    Header: typeof ModalHeader;
    Body: typeof ModalBody;
    Footer: typeof ModalFooter;
};
type ModalProps = {
    open: boolean;
    onClose: () => void;
} & ComponentProps<"div"> & VariantProps<typeof modal>;
declare const ModalMain: react.ForwardRefExoticComponent<Omit<ModalProps, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const Modal: ModalComponent;

declare const accordion: (props?: ({
    variant?: "primary" | null | undefined;
    size?: "small" | "medium" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type AccordionProps = ComponentProps<"details"> & VariantProps<typeof accordion>;
declare const Summary: ({ className, children, ...props }: ComponentProps<"summary">) => react_jsx_runtime.JSX.Element;
declare const Description$1: ({ className, ...props }: ComponentProps<"p">) => react_jsx_runtime.JSX.Element;
type AccordionType = typeof AccordionMain & {
    Summary: typeof Summary;
    Description: typeof Description$1;
};
declare const AccordionMain: react.ForwardRefExoticComponent<Omit<AccordionProps, "ref"> & react.RefAttributes<HTMLDetailsElement>>;
declare const Accordion: AccordionType;

declare const card: (props?: ({
    variant?: "primary" | null | undefined;
    size?: "small" | "medium" | "large" | "full" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type CardProps = ComponentProps<"div"> & VariantProps<typeof card>;
declare const Image: ({ className, ...props }: ComponentProps<"img">) => react_jsx_runtime.JSX.Element;
declare const Body: ({ className, ...props }: ComponentProps<"div">) => react_jsx_runtime.JSX.Element;
declare const Title: ({ className, ...props }: ComponentProps<"div">) => react_jsx_runtime.JSX.Element;
declare const Description: ({ className, ...props }: ComponentProps<"p">) => react_jsx_runtime.JSX.Element;
declare const Footer: ({ className, ...props }: ComponentProps<"div">) => react_jsx_runtime.JSX.Element;
type CardComponent = React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>> & {
    Image: typeof Image;
    Body: typeof Body;
    Title: typeof Title;
    Description: typeof Description;
    Footer: typeof Footer;
};
declare const Card: CardComponent;

declare const breadcrumb: (props?: ({
    variant?: "primary" | null | undefined;
    size?: "small" | "medium" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type BreadcrumbItemType = {
    label: string;
    href: string;
};
type BreadcrumbProps = ComponentProps<"nav"> & VariantProps<typeof breadcrumb> & {
    items: BreadcrumbItemType[];
};
declare const BreadcrumbMain: react.ForwardRefExoticComponent<Omit<BreadcrumbProps, "ref"> & react.RefAttributes<HTMLElement>>;

declare function cn(...inputs: ClassValue[]): string;

export { Accordion, Alert, Badge, BreadcrumbMain as Breadcrumb, Button, Card, Icon, Input, InputGroup, Label, Modal, Select, Spinner, Textarea, cn };
