const reducer=(state,action)=>{
    switch (action.type) {
        case ('LOADING'):
            return {...state,isLoading:true}
        case ('SET_DATA'):
            return {...state,isLoading:false,cart:action.payload}

        case ('CLEAR_CART'):
                return {...state,cart:[]}
            
         case ('REMOVE_ITEM'):
                const newList=state.cart.filter((item)=>{return item.id!==action.id})
                return {...state,cart:newList}

         case ('INCREASE_ITEM'):

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
        
        case ('GET_TOTALS'):
                let {totalItems,totalPrice}=state.cart.reduce((total,cartItem)=>{
                const {amount,price}=cartItem;
                //=======Count the number of items===========
                total.totalItems+=amount
                //========Calculate the total price of the items=========
                total.totalPrice+=price*amount
                return total
                },
                {
                totalItems:0,
                totalPrice:0
                })

                totalPrice=parseFloat(totalPrice.toFixed(2))

                return {...state,amount:totalItems,total:totalPrice}


        default:
            console.log(action.type);
            throw new Error(`Action "${action}" not found `);
            
    }
   
}

export default reducer