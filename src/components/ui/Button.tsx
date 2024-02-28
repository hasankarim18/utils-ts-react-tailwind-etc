import { ReactNode } from "react";
import { cn } from "../../utils/cn";

type TButton = {
  className: string;
  children: ReactNode;
  variant: string;
};

const Button = ({ className, children, variant }: TButton) => {
  const getVariant = (variant) => {
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
    <button className={cn("", getVariant(variant), className)}>
      {children}
    </button>
  );
};

export default Button;
