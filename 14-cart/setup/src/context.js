import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
import data from './data'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
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
  
//   useEffect(() => {
//   const fetchPhoneData= async()=>{
//     try {
//       const rawData=await fetch(url)
//       const myData=await rawData.json()
//       console.log(myData);
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   fetchPhoneData()
// }, [])

  const [state,dispatch]=useReducer(reducer,defaultState);
  // const [cart, setCart] = useState(cartItems)

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

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseItem,
        decreaseItem
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
