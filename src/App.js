import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import UploadButton from './UploadButton';
import DisplayJSON from './DisplayJSON';
import Navbar from './Navbar';

function App() {
  let [content, setContent] = useState();

  function handleContentChange(content){
    setContent(content);
  }

  if(content){
     return <DisplayJSON content={content}  />
  }

  return (
    <div className="App">
     
          <Navbar />
          <UploadButton handleChange={handleContentChange} />
    </div>
  );
}

export default App;