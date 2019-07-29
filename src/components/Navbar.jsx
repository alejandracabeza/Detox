import React from "react";
import "./../App.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <img src={require("./../logo.png")} alt="" id="logo" />
          <li className="menuItem">
            <Link to="/home/">Home</Link>
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
