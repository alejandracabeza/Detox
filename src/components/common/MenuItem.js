import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const MenuItem = props => {
  return (
    <MenuItemWrapper>
      <Link to={props.path}>{props.text}</Link>
    </MenuItemWrapper>
  );
};

const MenuItemWrapper = styled.li`
  list-style: none;
  & > a {
    color: whitesmoke;
    text-decoration: none;
    letter-spacing: 1px;
  }
  & a:hover {
    color: rgb(97, 97, 97);
    height: 100%;
    font-weight: 400;
  }
`;

MenuItem.propTypes = {
  path: PropTypes.string,
  text: PropTypes.string
};

export default MenuItem;
