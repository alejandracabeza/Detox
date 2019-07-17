import React, {useState, useEffect} from 'react';
// import './App.css';
import UploadButton from '../components/UploadButton';

function DisplayView(items) {
  let [data, setData] = useState([]);

  useEffect(() => {
    DisplayJSON();
  }, []);

  const DisplayJSON = async () =>{
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    setData(items => data.map(item => ({
      userId: item.userId,
      id: item.id,
      title: item.title,
      body: item.body
    })));
    } 
    console.log(data)

  return (
    <div>
        <div>
        <UploadButton  />
        </div>
        <div>
            <h1>Posts: </h1>
        </div>
    </div>
  )
  }
export default DisplayView;