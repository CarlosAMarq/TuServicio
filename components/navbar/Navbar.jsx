import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo";
import NavbarAccount from "./NavbarAccount";

export default function Navbar({ children }) {
  return (
    <nav className="navbar px-5 navbar-expand-sm navbar-primary bg-primary ">
      <div className="brand flex">
        <NavLink
          className="navbar-brand text-light font-weight-bold navbar-expand-lg "
          to="/TuServicio/"
          style={{ fontSize: "1.7rem" }}
        >
          <div className="flex gap-2" style={{ maxHeight: "50px" }}>
            <Logo size={"0.5"} className={"logo-animated"} />
          </div>
        </NavLink>
      </div>
      {children}
      <NavbarAccount />
    </nav>
  );
}
