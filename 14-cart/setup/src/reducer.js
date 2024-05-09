const reducer=(state,action)=>{
    switch (action.type) {
        case ('CLEAR_CART'):
           return {...state,cart:[]}
            
         case ('REMOVE_ITEM'):
            const newList=state.cart.filter((item)=>{return item.id!==action.id})
           return {...state,cart:newList}

         case ('INCREASE_ITEM'):
            
        //    const newAmount=state.amount+1
        //    //=========Added index 0 at the end since filter returns an array which contains the object=========
        //    const currenItem=state.cart.filter((item)=>{return item.id===action.id})[0]
          
        //    const newItemAmount=currenItem.amount+1
        //    const updatedItem={...currenItem,amount:newItemAmount}
        //    console.log(updatedItem);
        //    console.log(state.cart);

        //     const indexToUpdate=currenItem.id-1
        //    const updatedListOfObjects = [
        //     ...state.cart.slice(0, indexToUpdate), // Spread objects before the index
        //     updatedItem, // Add the updated object at the specified index
        //     ...state.cart.slice(indexToUpdate + 1) // Spread objects after the index
        //     ];
            //const increasedList={...state.cart,updatedItem}
        //    return {...state,cart:increasedList}

          const updatedListIncrease=state.cart.map((cartItem)=>{
            if (cartItem.id===action.id){
                return {...cartItem,amount:cartItem.amount+1}
            }
            return cartItem
          })
        return {...state,cart:updatedListIncrease}

         case ('DECREASE_ITEM'):
            
          const updatedListDecrease=state.cart.map((cartItem)=>{
            if (cartItem.id===action.id){
                return {...cartItem,amount:cartItem.amount-1}
            }
            return cartItem
          })
          //======Filter out amounts that have less than 0=========
          const filteredListDecrease=updatedListDecrease.filter((cartItem)=>{return cartItem.amount>0})
        return {...state,cart:filteredListDecrease}


        default:
            console.log(action.type);
            throw new Error(`Action "${action}" not found `);
            
    }
   
    return state
}

export default reducer