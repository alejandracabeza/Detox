import React from 'react';
import './App.css';

function DisplayJSON({content}){

    return (
        <div className="DisplayJSON"> ITEMS: 
            {content ? content.map((item, i) =>{
                return item.map((itemName, i) =>{
                return (
                <div key={i}>
                    {itemName.name}
                </div>)
                })}) :null }
        </div>
    )
}





export default DisplayJSON;