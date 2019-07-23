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

  function handleContentChange(content){
    setContent(content);
  }

  function handleSearchValue(searchValue){
    setSearchValue(searchValue);
  }

  return (
    <div className="App">
      <Navbar />
      <UploadButton handleChange={handleContentChange} />
      <FilterMenu content={content} search={searchValue} handleValue={handleSearchValue} />
      <DisplayJSON content={content} />
    </div>
  );
}

export default App;
