// import React from 'react'
// import { useGlobalContext } from './context'

// // components
// import Navbar from './Navbar'
// import CartContainer from './CartContainer'
// // items

// function App() {
//   // if (loading) {
//   //   return (
//   //     <div className='loading'>
//   //       <h1>Loading...</h1>
//   //     </div>
//   //   )
//   // }
//   return (
//     <main>
//       <Navbar />
//       <CartContainer />
//     </main>
//   )
// }

// export default App




import {React,useState,useReducer} from 'react'
import { useGlobalContext } from './context'
import Navbar from './Navbar'
import CartContainer from './CartContainer'

const people=[
  {id:1,name:'John'},
  {id:2,name:'KIM'},
  {id:3,name:'ALICE'},
  {id:4,name:'KIMANI'}
]

const DELETE_USERS='DELETE_USERS';
const DELETE_SINGLE_USER='DELETE_SINGLE_USER';
const RESET_USERS='RESET_USERS';

const defaultState={
  people:people,
  isLoading:false
}


const reducer=(state,action)=>{
  if (action.type===DELETE_USERS){
      return {...state,people:[]}

  }else if (action.type===DELETE_SINGLE_USER){
    const {payload}=action;
    const remainingUsers=state.people.filter((person)=>{ return person.id!==payload.id})
    return {...state,people:remainingUsers}

  }else if (action.type===RESET_USERS){
    return {...state,people:people}

  }else{
    throw new Error(`The action "${action.type}" does not exist`);
  }
}



function App() {
  const [state,dispatch]=useReducer(reducer,defaultState);
  const deleteUsers=()=>{
    dispatch({type:DELETE_USERS})
  }
  const deleteSinglePerson=(id)=>{
    dispatch({type:DELETE_SINGLE_USER,payload:{id}})
  }

  const resetUsers=()=>{
    dispatch({type:RESET_USERS})
  }
  return (
    <main>
      {state.people.map((person)=>{
        const {id,name}=person
        return <div key={id}>
          <h4>{name}</h4>
          <button onClick={()=>deleteSinglePerson(id)}>Delete</button>
        </div>
      })}
      {state.people.length===0? 
      <button onClick={()=>resetUsers()}>Reset</button>:
       <button onClick={()=>deleteUsers()}>Clear</button> }
      
    </main>
  )
}

export default App
