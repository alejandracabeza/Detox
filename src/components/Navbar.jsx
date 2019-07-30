import React from "react";
import "./../App.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div>
          <Link to="/home/">
            <img src={require("./../logo.png")} alt="" id="logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li className="menuItem">
            <Link to="/dashboard/">Dashboard</Link>
          </li>
          <li className="menuItem">
            <Link to="/upload/">Upload</Link>
          </li>
          <li className="menuItem">
            <Link to="/logout/">Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
