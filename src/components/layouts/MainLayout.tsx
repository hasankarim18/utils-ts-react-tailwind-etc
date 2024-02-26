import { Outlet } from "react-router-dom";
import Container from "./Container";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <Container className="">
      <div>
        <Navbar />

        <Outlet />
      </div>
    </Container>
  );
};

export default MainLayout;
