import React, { useState } from 'react';
import './App.css';


function FilterMenu({content}){
    let [searchValue, setSearchValue] = useState("");
    
    const searchBar =  <input value={searchValue} 
    onChange={event => setSearchValue(event.target.value)}
    placeholder="Search"/>;

    return(
        <React.Fragment>
             <h1>Search</h1>
            {searchBar}
            {content ? content.map((JSONitem, index) => {
                return JSONitem.map((JSONitem1, i) =>{
                let search = searchValue.toLowerCase();
                let name = JSONitem1["name"].toLowerCase();
                if(name.includes(search)){
                    console.log(Object.values(JSONitem1));
                    return (
                        <div className="listItem" key={i}>
                            <div>
                                <div>{JSONitem1.name}</div>
                            </div>
                        </div>
                    ) 
                 }
                
            })}) : null }
        </React.Fragment>
    )
}

export default FilterMenu;