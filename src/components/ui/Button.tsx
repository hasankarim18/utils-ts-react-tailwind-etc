import { cn } from "../../utils/cn";

type TButton = {
  className: string;
  outline: boolean;
};

const Button = ({ className, outline }: TButton) => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md",
        {
          "border-4 border-purple-700": outline,
        },
        className
      )}
    >
      Click
    </button>
  );
};

export default Button;
