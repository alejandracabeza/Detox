import React from "react";
import "./App.css";

function Search(props, { fil }) {
  return (
    <React.Fragment>
      <h1>Search</h1>
      <input
        value={fil}
        onChange={event => props.handleValue(event.target.value)}
        placeholder="Search"
      />
    </React.Fragment>
  );
}

export default Search;
