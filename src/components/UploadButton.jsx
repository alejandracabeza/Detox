import React from 'react';
import './../App.css';
// import FilterMenu from './FilterMenu';

  function UploadButton(props) {
    let fileReader;
  
    const handlefileRead = () => {
      props.handleChange(Object.values(JSON.parse(fileReader.result)));
    }
  
    const handleFileChosen = (file) =>{
      fileReader = new FileReader();
      fileReader.onloadend = handlefileRead;
      fileReader.readAsText(file);
    }
  
    return (
      <React.Fragment>
        <div id="uploadDiv">
          <input type='file'
          id='file'
          accept='.json'
          onChange={e => handleFileChosen(e.target.files[0])}
          />
          <label htmlFor="file">Choose a file</label>
        </div>
      </React.Fragment>
    );
  }

export default UploadButton;