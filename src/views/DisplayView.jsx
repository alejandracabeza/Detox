import React, {useState, useEffect} from 'react';
import './../App.css';
import UploadButton from '../components/UploadButton';

export function DisplayView(items) {
  let [data, setData] = useState([]);

  useEffect(() => {
    // DisplayJSON();
  }, []);

  // const DisplayJSON = async () =>{
  //   let response = await fetch('content');
  //   const data = await response.json();
  //   setData(items => data.map(item => {
  //     return Object.values(item);
  //   }));
  //   } 
  //   console.log(data)

  return (
    <div>
        <div>
        <UploadButton  />
        </div>
        <div>
{/* 
            <div>{data.map(function(item, i){
              console.log(item)
              return <div key={i}>Desc: {item[3]}<br/>
              </div>
            } )}</div> */}
        </div>
    </div>
  )
  }
export default DisplayView;