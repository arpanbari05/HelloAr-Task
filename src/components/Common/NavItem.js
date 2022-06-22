import { NavLink } from "react-router-dom";

function Link({ to, label }) {
  return (
    <NavLink
      className={`w-full py-5 px-6 lg:px-12 text-base text-gray-600 font-medium hover:bg-gray-100`}
      activeClassName="bg-primary text-[#fff] hover:bg-primary"
      to={to}
    >
      {label}
    </NavLink>
  );
}

export default Link;
