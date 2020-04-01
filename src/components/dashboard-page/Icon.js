import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Icon = props => {
  return (
    <IconWrapper>
      <img src={props.img} alt={props.alt} />
    </IconWrapper>
  );
};

const IconWrapper = styled.div`
  width: 300px;
  padding: 20px;
  & > img {
    width: 60%;
  }
`;

Icon.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string
};

export default Icon;
