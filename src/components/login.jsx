import React from "react";
import Navbar from "./Navbar";
import "./../App.css";

function login() {
  return (
    <React.Fragment>
      <form action="PUT">
        <label htmlFor="">
          <input type="text" value="Name" />
        </label>
        <label htmlFor="">
          <input type="text" value="Email" />
        </label>
        <label htmlFor="">
          <input type="text" value="Password" />
        </label>
      </form>
    </React.Fragment>
  );
}

export default login;
