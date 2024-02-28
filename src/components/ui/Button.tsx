import { ReactNode, forwardRef } from "react";
import { cn } from "../../utils/cn";

type TButton = {
  className: string;
  children: ReactNode;
  variant: string;
};

const Button = forwardRef(
  ({ className, children, variant, ...rest }: TButton, ref) => {
    const getVariant = (variant: string) => {
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
      <button {...rest} className={cn("", getVariant(variant), className)}>
        {children}
      </button>
    );
  }
);

export default Button;
