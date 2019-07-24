import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import UploadButton from './UploadButton';
import DisplayJSON from './DisplayJSON';
import Search from './Search';
import Navbar from './Navbar';

function App() {
  let [content, setContent] = useState();
  let [searchValue, setSearchValue] = useState("");


  function handleContentChange(content){
    setContent(content);
  }
  function handleSearchValue(searchValue){
    setSearchValue(searchValue);
  }

  
  function filterData(data, filter) {
   return data ? data.map((JSONitem, index) => {
      return JSONitem.map((JSONitem1, i) =>{
      let search = filter.toLowerCase();
      let name = JSONitem1["name"].toLowerCase();
      if(name.includes(search)){
          console.log(JSONitem1);
          return (
              <div className="listItem" key={i}>
                  <div>
                      <div>{JSONitem1.name}</div>
                  </div>
              </div>
          ) 
       }console.log(filter);
      
  })}) : null 
  }

const filteredData = filterData(content, searchValue)

  return (
    <div className="App">
      <Navbar />
      <UploadButton handleChange={handleContentChange} />
      <Search content={filteredData} search={searchValue} handleValue={handleSearchValue} />
      <DisplayJSON content={content} fil={filteredData} />
    </div>
  );
}

export default App;