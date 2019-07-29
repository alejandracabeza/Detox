import React from "react";
import "./../App.css";

function Search(props, { fil }) {
  return (
    <React.Fragment>
      <div className="search-container">
        <h1 id="search">Search</h1>
        <input
          value={fil}
          onChange={event => props.handleValue(event.target.value)}
          placeholder="Search"
          className="search-bar"
        />
      </div>
    </React.Fragment>
  );
}

export default Search;
