import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-semibold tracking-wide uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--red)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--red)] text-white hover:bg-[var(--red-dark)] px-5 py-3",
        secondary:
          "border-2 border-white bg-white/10 text-white hover:bg-white hover:text-[var(--navy)] px-5 py-3",
        outline:
          "border border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white px-5 py-3",
        ghost: "text-white hover:text-[var(--sand)] px-3 py-2",
      },
      size: {
        default: "min-h-11",
        sm: "min-h-9 px-3 text-xs",
        lg: "min-h-12 px-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
