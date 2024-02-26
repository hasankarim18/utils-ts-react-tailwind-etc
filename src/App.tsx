import { Outlet } from "react-router-dom";
import "./App.css";
import Container from "./components/layouts/Container";

import Navbar from "./components/layouts/Navbar";

function App() {
  return (
    <>
      <Container className="  h-screen">
        <h1 className="text-center text-3xl">Reusable Components</h1>
        <Navbar />
        <Outlet />
      </Container>
    </>
  );
}

export default App;
