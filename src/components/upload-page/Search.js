import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Search = (props, { fil }) => {
  return (
    <SearchContainerWrapper>
      <h1>Search</h1>
      <input
        value={fil}
        onChange={event => props.handleValue(event.target.value)}
        placeholder="Search"
      />
    </SearchContainerWrapper>
  );
};

const SearchContainerWrapper = styled.div`
  width: 490px;
  display: block;
  margin: 2% 5%;
  color: whitesmoke;
  & > h1 {
    margin-bottom: 2%;
    text-shadow: 5px 3px 9px rgba(148, 133, 133, 0.56) #d0cfce;
  }
  & > input {
    margin: 0 auto;
    width: 20%;
    height: 40px;
    padding: 0 20px;
    font-size: 1rem;
    border: 1px solid #d0cfce;
    outline: none;
    border-radius: 5%;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

Search.propTypes = {
  handleValue: PropTypes.func
};

export default Search;
