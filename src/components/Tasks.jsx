import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function Tasks() {
  return (
    <div className="container">
      <nav className="navbar navbar-contianer flex">
        <ul className="nav-link flex">
          <li>
            <NavLink className={"nav-link"} to={"search"}>
              Search
            </NavLink>
          </li>
          <li>
            <NavLink className={"nav-link"} to={"lists"}>
              List
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />;
    </div>
  );
}

export default Tasks;
