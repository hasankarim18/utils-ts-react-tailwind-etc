# utils-ts-react-tailwind-etc

## How to use `cn` function in tailwind - react.js or react.ts

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
