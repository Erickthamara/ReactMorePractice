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
    
         
           return(
         
           <List {...person}/>
           )
        })}
        <button onClick={clearList}>CLEAR LIST</button>
    </div>
  </>;
}

export default App;
