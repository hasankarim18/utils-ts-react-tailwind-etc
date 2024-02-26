# utils-ts-react-tailwind-etc

## How to use `cn` function in tailwind - react.js or react.ts

1.  [CN Function](#cn-function)
2.  [Reusable Button js/ts](#reusable-button)
3.  [Mange `routes` ](#manage-routes)
4.  [Extending tailwind](#extend-tailwind)
5.  [tailwind-merge `twMerge`](#tailwind-merge)
6.  [Clsx with twMerge](#clsx-with-twmerge)

## cn Function

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

### CN used in Button with conditional rendering

```
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

-----------------------
// in App.tsx
import Button from "../components/ui/Button";

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Button outline className=" bg-red-400  " />
    </div>
  );
};

export default Home;

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

## Reusable Button

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

---

## Manage Routes

- See in routes

```
import { Navigate, createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,

    children: [
      {
        path: "", // will match with the parent
        element: <Navigate to="dashboard" />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "add-user",
        element: <AddUser />,
      },
    ],
  },
]);

export default router;

```

---

## Extend Tailwind

```
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient": "linear-gradient(30deg,#fb923c, #047857)",
      },
    },
  },
  plugins: [],
};

```

- Apply in components

```
 <div className={cn(`max-w-7xl mx-auto bg-primary-gradient`, className)}>
      {children}
  </div>
```

---

## Tailwind Merge

- Tailwind merge solve the problem of tailwind merging

```
import { twMerge } from "tailwind-merge";

type TButton = {
  className: string;
  variant: string;
  textColor: string;
};

const Button = ({ className, ...rest }: TButton) => {
  return (
    <button {...rest} className={twMerge(`bg-red-500`, className)}>
      Click
    </button>
  );
};

export default Button;


```

---

## Clsx with twmerge

- `clsx` and `twMerge`
- `clsx` is used for conditional `className` rendering and `twMerge` is used for merging className without conflict.

```
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type TButton = {
  className: string;
  variant: boolean;
};

const Button = ({ className, variant, textColor }: TButton) => {
  const color = `text-${textColor}-500`;
  console.log(color);
  return (
    <button
      className={twMerge(
        clsx(
          {
            " border-2  border-purple-500": variant === "outline",
          },
          {
            "text-green-800": textColor === "green",
          },
          "text-2xl font-semibold",
          className
        )
      )}
    >
      Click
    </button>
  );
};

export default Button;

```

- `clsx` is written inside `twMerge`

- conditional className is rewritten in object you can use as much object as you can

- can be used as below

```
const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Button
        textColor="green"
        variant="outline"
        className="px-4 py-2 rounded-md bg-red-400  "
      />
    </div>
  );
};
```

### The better way is cn function
