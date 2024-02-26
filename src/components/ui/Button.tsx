import { twMerge } from "tailwind-merge";

type TButton = {
  className: string;
};

const Button = ({ className, ...rest }: TButton) => {
  return (
    <button {...rest} className={twMerge(`bg-red-500`, className)}>
      Click
    </button>
  );
};

export default Button;
