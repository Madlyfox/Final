import { NavLink } from "react-router-dom";
import { useState } from "react";

import "../sass/navbar.scss";

function Navbar() {
  const path = window.location.pathname;

  if (path === "/employees_list") {
    return (
      <div className="nav">
        <h1>HRnet</h1>
        <div className="links">
          <NavLink to="/" className="link">
            Home
          </NavLink>
        </div>
      </div>
    );
  }
  if (path == "/") {
    return (
      <div className="nav">
        <h1>HRnet</h1>
        <div className="links">
          <NavLink to="/employees_list" className="link">
            Employees List
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navbar;
