import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar container flex">
      <NavLink to={'/'} className="logo" style={{
        fontSize: '2rem',
        fontWeight: '700', color: 'yellow'
      }} >lGMCo</NavLink>

      <ul className="navlinks flex">
        <li>
          <NavLink className={"nav-link"} to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={"nav-link"} to={"/users"}>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink className={"nav-link"} to={"/tasks"}>
            Tasks
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
