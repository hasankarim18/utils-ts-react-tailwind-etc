import { Outlet } from "react-router-dom";
import AdminMenu from "./AdminComponents/AdminMenu";
import Container from "./Container";

const AdminLayout = () => {
  return (
    <Container className="">
      <div>
        <div className="grid grid-cols-12">
          <div className="min-h-screen lg:col-span-2 relative bg-gray-200 p-4 ">
            <div className="sticky left-0 top-0">
              <AdminMenu />
            </div>
          </div>
          <div className="p-4 lg:col-span-10 ">
            <Outlet />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AdminLayout;
