import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
import data from './data'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://cors-anywhere.herokuapp.com/https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()
const defaultState={
  isLoading:false,
  cart:cartItems,
  total:0,
  amount:0,
  individualAmount:0
}
// export const CLEAR_CART='CLEAR_CART'

const AppProvider = ({ children }) => {

  const [state,dispatch]=useReducer(reducer,defaultState);

 const fetchData = async () => {
  try {
    const rawData = await fetch(url);
    
    if (!rawData.ok) {
      throw new Error(`Request failed with status ${rawData.status}`);
    }
    
    const contentType = rawData.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Response is not in JSON format');
    }
    
    const data = await rawData.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(`Error encountered: ${error.message}`);
  }
};

  const clearCart=()=>{
    dispatch({type:'CLEAR_CART'})
  }
  const removeItem=(id)=>{
    dispatch({type:'REMOVE_ITEM',id:id})
  }

  const increaseItem=(id)=>{
    dispatch({type:'INCREASE_ITEM',id:id})
  }
  const decreaseItem=(id)=>{
    dispatch({type:'DECREASE_ITEM',id:id})
  }
  

  //======Useeffect to fetch data=========
  // useEffect(() => {
  //   dispatch({type:'LOADING'})
  //   const cartData=fetchData()
  //   dispatch({type:'SET_DATA',payload:cartData})
    
  // }, [])
  
  useEffect(() => {
    dispatch({type:'GET_TOTALS'})
    
  }, [state.cart])
  
  


  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseItem,
        decreaseItem,
       
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
