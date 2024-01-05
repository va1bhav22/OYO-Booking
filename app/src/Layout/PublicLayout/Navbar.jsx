import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ListRoutes } from "../../routes/routes-elements";
const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="flex gap-2">
      {ListRoutes?.map((nav) => (
        <Link to={nav.path} key={nav.id} className="flex">
          <p
            className={` border-2 p-2 ${
              nav?.path === currentPath ? "bg-red-500" : ""
            }`}
          >
            {nav.title}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
