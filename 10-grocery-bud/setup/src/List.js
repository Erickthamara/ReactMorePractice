import React,{useState} from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = () => {
  const [items, setItems] = useState(['cow','goat'])
  const [grocery, setGrocery] = useState('')

  const handleGroceryChange=(e)=>{
    e.preventDefault();
    console.log(`The value is ${e.target.value}`);
    setGrocery(e.target.value)
  }
  const handleGroceryAddition=()=>{
    if (!items) return
    console.log(`values are ${grocery}`);
    const listItems=[... items,grocery]
    console.log(`Items are ${listItems}`);
    setItems(listItems)
  }
  return <>
    <div className="form-control">
      <input type="text"
       name="grocery"
        id="grocery"
        value={grocery} 
        onChange={handleGroceryChange} />
         <button className="submit-btn" onClick={handleGroceryAddition}>Submit</button>
    </div>
    {items.length===0 ? '': <div className="grocery-container">
      {items.map((groceryItem,index)=>{
        return <div className="grocery-item" key={index}>{groceryItem}</div>
      })}
      
      
    </div> }
   
  </>
}

export default List