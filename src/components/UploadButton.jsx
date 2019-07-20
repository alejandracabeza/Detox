import React, {useState}from 'react';
import './../App.css';
// import DisplayView from './../views/DisplayView'

export function UploadButton() {
  let fileReader;
  let [content, setContent] = useState([]);


  const handlefileRead = (e) => {
    // const content = fileReader.result;
    content = JSON.parse(fileReader.result);
    setContent(Object.values(content));
  }


  const handleFileChosen = (file) =>{
    fileReader = new FileReader();
    fileReader.onloadend = handlefileRead;
    fileReader.readAsText(file);
  }

  return (
    <div>
      <div id="uploadDiv">
        <input type='file'
        id='file'
        
        accept='.json'
        onChange={e => handleFileChosen(e.target.files[0])}
        />
        <label for="file">Choose a file</label>
      </div>
      <div className="DisplayJSON">
         
        {content.map(function(item, i){

            return <div key={i}>Following:{item[0].name}<br/></div>
            
          }
         )}
  
        
            
            
        
      </div>
    </div>
  );
}

export default UploadButton;