import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const[people,setPeople]=useState(data)
  const clearList=()=>{
    setPeople([])
  }

  return <>
    <div className='container'>

        <h3>{`${people.length} birthdays today`}</h3>
        {people.map((person)=>{
           const{id,name,age,image}=person
           return(
             <div className='person' key={id}>
            <img src={image} alt="Profile Photo" />
            <h4>{name}</h4>
            <p>{age}</p>
           </div>
           )
        })}
        <button onClick={clearList}>CLEAR LIST</button>
    </div>

  </>;
}

export default App;
