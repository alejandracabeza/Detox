import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MenuItem from "./MenuItem";
import logo from "../../assets/logo.png";

const Navbar = () => {
  let [path] = useState([
    {
      path: "/dashboard",
      text: "Dashboard"
    },
    {
      path: "/upload",
      text: "Upload"
    },
    {
      path: "/logout",
      text: "Logout"
    }
  ]);
  return (
    <NavBarWrapper>
      <div>
        <Link to="/home/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
      <ul>
        {path &&
          path.map((item, index) => (
            <MenuItem key={index} path={item.path} text={item.text} />
          ))}
      </ul>
    </NavBarWrapper>
  );
};

const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  background: rgba(255, 255, 255, 0);
  border-bottom: solid 2px whitesmoke;
  & > ul {
    display: flex;
    justify-content: space-around;
    width: 30%;
  }
`;

export default Navbar;
