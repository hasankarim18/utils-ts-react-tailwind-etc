import { Navigate, createBrowserRouter } from "react-router-dom";
import AddUser from "../components/layouts/AdminComponents/AddUser";
import Dashboard from "../components/layouts/AdminComponents/Dashboard";
import AdminLayout from "../components/layouts/AdminLayout";
import About from "../pages/About";
import Home from "../pages/Home";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path: "",
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
