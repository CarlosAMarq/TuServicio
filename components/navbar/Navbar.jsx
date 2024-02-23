import React from "react";

export default function Navbar({ children }) {

  return (
    <nav className="navbar px-5 navbar-expand-sm navbar-primary bg-primary ">
      {children}
    </nav>
  );
}
