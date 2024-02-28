import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import { cn } from "../../utils/cn";

type TVariant = "solid" | "ghost" | "outline";

type TButtonOPtions = {
  variant?: TVariant;
};

type TRef = HTMLButtonElement;

type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TButtonOPtions;

const Button = forwardRef<TRef, TButton>(
  ({ className, children, variant = "solid", ...rest }, ref) => {
    const getVariant = (variant: TVariant) => {
      switch (variant) {
        case "outline":
          return "btn-outline";

        case "ghost":
          return "btn-ghost";
        default:
          return "btn-solid";
      }
    };

    return (
      <button
        ref={ref}
        {...rest}
        className={cn("", getVariant(variant), className)}
      >
        {children}
      </button>
    );
  }
);

export default Button;
