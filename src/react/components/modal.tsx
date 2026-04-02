import { ComponentProps, forwardRef } from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const modal = cva(
  "fixed inset-0 flex z-50",
  {
    variants: {
      position: {
        topLeft: ["items-start justify-start"],
        topCenter: ["items-start justify-center"],
        topRight: ["items-start justify-end"],
        centerLeft: ["items-center justify-start"],
        center: ["items-center justify-center"],
        centerRight: ["items-center justify-end"],
        bottomLeft: ["items-end justify-start"],
        bottomCenter: ["items-end justify-center"],
        bottomRight: ["items-end justify-end"],
      },
      // `boolean` variants are also supported!
      disabled: {
        false: null,
        true: ["opacity-50", "pointer-events-none"],
      },
    },
    defaultVariants: {
      position: "center",
      disabled: false,
    },
  },
);

const modalContent = cva(
  "relative m-2 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 z-10 flex flex-col max-h-[90vh] text-gray-800 dark:text-white",
  {
    variants: {
      size: {
        small: "w-64",
        medium: "w-96",
        large: "w-full max-w-xl",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
);

export type ModalProps = {
  open: boolean;
  title?: string;
  footer?: React.ReactNode;
  onClose: () => void;
} &
  ComponentProps<"div"> &
  VariantProps<typeof modal> &
  VariantProps<typeof modalContent>;

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ className, position, size, children, open, onClose, title, footer, ...props }, ref) => {
    if (!open) return null;

    return (
      <>
        {open && (
          <div className={cn("fixed inset-0 flex z-50", modal({ position }), className)}
            ref={ref}
            {...props}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={onClose}
            ></div>

            {/* Body */}
            <div className={modalContent({ size })}>
              {/* Header */}
              <h2 className="text-xl font-semibold mb-4">
                {title}
              </h2>

              {/* Content */}
              <div className="overflow-y-auto flex-1 mb-4">
                {children}
              </div>

              {/* Footer */}
              <div className="flex justify-end gap-2">
                {footer}
              </div>
            </div>
          </div>
        )}
      </>
    );
  },
);

Modal.displayName = "Modal";

export default Modal;
export { modal };
