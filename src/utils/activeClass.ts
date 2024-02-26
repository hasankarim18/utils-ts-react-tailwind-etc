interface NavLinkProps {
  isActive: boolean;
}

const activeClass = ({ isActive }: NavLinkProps) => {
  return {
    textDecoration: isActive ? "underline" : "",
  };
};

export default activeClass;
