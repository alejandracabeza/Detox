import React, { useState } from "react";
import styled from "styled-components";
import Search from "./Search";

function DisplayJSON({ content }) {
  let [searchValue, setSearchValue] = useState("");

  const handleSearchValue = searchValue => {
    setSearchValue(searchValue);
  };

  const filterData = (data, filter) => {
    return data
      ? data.map((JSONitem, index) => {
          return JSONitem.map((JSONitem1, i) => {
            let search = filter.toLowerCase();
            let name = JSONitem1["name"].toLowerCase();
            if (name.includes(search)) {
              return (
                <div>
                  <div>{JSONitem1.name}</div>
                </div>
              );
            }
          });
        })
      : null;
  };

  const filteredData = filterData(content, searchValue);

  return (
    <React.Fragment>
      <Search
        content={filteredData}
        search={searchValue}
        handleValue={handleSearchValue}
      />
      <DisplayJSONWrapper>
        <h1>Following</h1>
        <div>{filteredData}</div>
      </DisplayJSONWrapper>
    </React.Fragment>
  );
}

const DisplayJSONWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  margin: auto;
  width: 40%;
  height: 50vh;
  background-color: whitesmoke;
  color: #808080;
  border-radius: 5%;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
  & > * {
    padding: 10px;
  }
`;

export default DisplayJSON;
