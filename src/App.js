import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import UploadButton from './UploadButton';
import DisplayJSON from './DisplayJSON';
import FilterMenu from './FilterMenu';
import Navbar from './Navbar';

function App() {
  let [content, setContent] = useState();
  let [searchValue, setSearchValue] = useState("");

  function searchBar(){
    return (
      <input value={searchValue} 
  onChange={event => setSearchValue(event.target.value)}
  placeholder="Search"/>
    )
  }

  function handleContentChange(content){
    setContent(content);
  }

  function handleSearchValue(searchValue){
    setSearchValue(searchValue);
  }

  const filteredData = filterData(content, searchValue)


  function filterData(data, filter) {
   return data ? data.map((JSONitem, index) => {
      return JSONitem.map((JSONitem1, i) =>{
      let search = filter.toLowerCase();
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
      
  })}) : null
  }


  return (
    <div className="App">
          <Navbar />
          <UploadButton handleChange={handleContentChange} />
          <searchBar />
          <FilterMenu content={filteredData} search={searchValue} handleValue={handleSearchValue} />
          <DisplayJSON content={filteredData} />
      
    </div>
  );
}

export default App;
