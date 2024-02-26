import { NavLink } from "react-router-dom";
import activeClass from "../../../utils/activeClass";

const AdminMenu = () => {
  return (
    <div className="flex flex-col gap-8">
      <NavLink
        className="text-2xl hover:underline bg-green-300 p-2 rounded-md"
        to="/"
      >
        Back to Home
      </NavLink>
      <NavLink
        style={activeClass}
        className="text-2xl hover:underline bg-gray-300 p-2 rounded-md"
        to="/admin/dashboard"
      >
        Dashboard
      </NavLink>
      <NavLink
        style={activeClass}
        className="text-2xl hover:underline bg-gray-300 p-2 rounded-md"
        to="/admin/add-user"
      >
        Add User
      </NavLink>
    </div>
  );
};

export default AdminMenu;
