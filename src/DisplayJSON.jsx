import React, { useState } from "react";
import "./App.css";
import Search from "./Search";
import Navbar from "./Navbar";

function DisplayJSON({ content }) {
  let [searchValue, setSearchValue] = useState("");

  function handleSearchValue(searchValue) {
    setSearchValue(searchValue);
  }

  function filterData(data, filter) {
    return data
      ? data.map((JSONitem, index) => {
          return JSONitem.map((JSONitem1, i) => {
            let search = filter.toLowerCase();
            let name = JSONitem1["name"].toLowerCase();
            if (name.includes(search)) {
              return (
                <React.Fragment>
                  <div className="listItem" key={i}>
                    <div>
                      <div>{JSONitem1.name}</div>
                    </div>
                  </div>
                </React.Fragment>
              );
            }
          });
        })
      : null;
  }

  const filteredData = filterData(content, searchValue);

  return (
    <React.Fragment>
      <Navbar />
      <Search
        content={filteredData}
        search={searchValue}
        handleValue={handleSearchValue}
      />
      <div className="DisplayJSON">
        {" "}
        <h1>Following</h1>
        <br />
        <div>{filteredData}</div>
      </div>
    </React.Fragment>
  );
}

export default DisplayJSON;
