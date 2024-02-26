import { ReactNode } from "react";
import { cn } from "../../utils/cn";

type TContainer = {
  className: string;
  children: ReactNode;
};

const Container = ({ className, children }: TContainer) => {
  return (
    <div className={cn(`max-w-[1240px] mx-auto px-[20px] `, className)}>
      {children}
    </div>
  );
};

export default Container;
