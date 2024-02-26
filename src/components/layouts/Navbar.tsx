import { NavLink } from "react-router-dom";
import activeClass from "../../utils/activeClass";

const Navbar = () => {
  return (
    <div className="flex gap-4 justify-between my-2">
      <div className="flex gap-4">
        <NavLink
          style={activeClass}
          className="text-2xl hover:underline"
          to="/"
        >
          {" "}
          Home
        </NavLink>
        <NavLink
          //  style={activeClass}
          className="text-2xl hover:underline"
          to="/about"
        >
          About{" "}
        </NavLink>
      </div>
      <div>
        <NavLink className="text-2xl hover:underline" to="/admin">
          {" "}
          Dashboard{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
