import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UploadButton from "./UploadButton";
import Logo from "./logo.png";

function Navbar() {
  return (
    <Router>
      <nav>
        <ul>
          <img src={require("./logo.png")} alt="" id="logo" />
          <li className="menuItem">Home</li>
          <li className="menuItem">Upload</li>
          <li className="menuItem">Logout</li>
        </ul>
      </nav>
    </Router>
  );
}

export default Navbar;
