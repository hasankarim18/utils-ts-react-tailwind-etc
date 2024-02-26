# utils-ts-react-tailwind-etc

## How to use `cn` function in tailwind - react.js or react.ts

1.  [cn function](#cn)
2.  [button (reusable)](#button)

#cn Function

- First write the cn function and export it <br/>
  - Install `clsx` and `tailwind-merge`

```
### utils.ts
-----
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
  }
```

- Import the function and use it in your desired component

  - Here is container component

```
### Container.tsx
----
import { ReactNode } from "react";
import { cn } from "../../utils/cn";

type TContainer = {
  className: string;
  children: ReactNode;
};

const Container = ({ className, children }: TContainer) => {
  return <div className={cn(`max-w-7xl mx-auto`, className)}>{children}</div>;
};

export default Container;

```

- Now use this Container in your desired place and can apply your own class

```
import "./App.css";
import Container from "./components/layouts/Container";

function App() {
  return (
    <>
      <Container className=" bg-gray-400 h-screen">
        <h1>This is a container</h1>
      </Container>
    </>
  );
}

export default App;

```

---

## Reusable Button #button

`for typeScript`-- modify for javascript as necessary

```
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }


```