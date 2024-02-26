import { NavLink } from "react-router-dom";

interface NavLinkProps {
  isActive: boolean;
}

const Navbar = () => {
  const activeClass = ({ isActive }: NavLinkProps) => {
    return {
      textDecoration: isActive ? "underline" : "none",
    };
  };

  return (
    <div className="flex gap-4">
      <NavLink style={activeClass} className="text-2xl hover:underline" to="/">
        {" "}
        Home
      </NavLink>
      <NavLink
        style={activeClass}
        className="text-2xl hover:underline"
        to="/about"
      >
        About{" "}
      </NavLink>
    </div>
  );
};

export default Navbar;
