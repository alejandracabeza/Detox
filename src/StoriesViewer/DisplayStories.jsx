import React, { useState} from 'react';
import Navbar from './../Navbar';
import Search from './../Search'


function DisplayStories({stories}){
    let [searchValue, setSearchValue] = useState("");

    function handleSearchValue(searchValue){
        setSearchValue(searchValue);
      }
    
      function filterData(data, filter) {
              return (
                  <React.Fragment>
                    <div className="listItem" key={i}>
                        <div>
                            <div>{}</div>
                        </div>
                    </div>
                  </React.Fragment>
              ) 
           }
          
      })}) : null 
      }
    
    const filteredData = filterData(stories, searchValue)
    
    return (
        <React.Fragment>
            <Navbar />
            <Search content={filteredData} search={searchValue} handleValue={handleSearchValue}/>
            <div className="DisplayJSON"> <h1>Archived Stories</h1><br/> 
                <div>{filteredData}</div>
            </div>
        </React.Fragment>
    )
}

export default DisplayStories;