import React,{ useState } from 'react';
import Review from './Review';
import data from './data'

function App() {
  const [people, setPerson] = useState(data)
  const [currentPerson, setcurrentPerson] = useState(1)
  const nextPerson=(id)=>{
    id===4 ? setcurrentPerson(1) : setcurrentPerson(id+=1)
  }
  const previousPerson=(id)=>{
    id===1 ? setcurrentPerson(4) : setcurrentPerson(id-=1)
  }
  const randomPerson=(id)=>{
      const randomNumber=randomIntFromInterval(1,4)
      randomNumber===id ? setcurrentPerson(randomIntFromInterval(1,4)) : setcurrentPerson(randomNumber)
  }
  const randomIntFromInterval=(min, max)=> { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
  return <>
      <Review {...people[currentPerson-1]} nextPerson={nextPerson} previousPerson={previousPerson} randomPerson={randomPerson}/>

  </>;
}
export default App;
