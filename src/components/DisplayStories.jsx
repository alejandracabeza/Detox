import React from "react";
import Search from "./Search";

function DisplayStories({ stories }) {
  function filterData(data) {
    return data
      ? data.map((firstArray, i) => {
          firstArray.map((secondArray, j) => {
            if (!!secondArray.attachments) {
              secondArray.attachments.map((thirdArray, k) => {
                if (!!thirdArray.data) {
                  thirdArray.data.map((fourthArray, l) => {
                    if (!!fourthArray.media.uri) {
                      return (
                        <React.Fragment>
                          <div className="listItem" key={l}>
                            {console.log(fourthArray)}
                            <div>
                              <div>{fourthArray}</div>
                            </div>
                          </div>
                        </React.Fragment>
                      );
                    }
                  });
                }
              });
            }
          });
        })
      : null;
  }

  const filteredData = filterData(stories);

  return (
    <React.Fragment>
      <Search
        content={filteredData}
        // search={searchValue}
        // handleValue={handleSearchValue}
      />
      <div className="DisplayJSON">
        {" "}
        <h1>Archived Stories</h1>
        <br />
        <div>{filteredData}</div>
      </div>
    </React.Fragment>
  );
}

export default DisplayStories;