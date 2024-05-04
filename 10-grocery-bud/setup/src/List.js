import React,{useState} from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = () => {
  const [items, setItems] = useState([])
  const [grocery, setGrocery] = useState('')

  const handleGroceryChange=(e)=>{
    e.preventDefault();
    setGrocery(e.target.value)
  }
  const handleGroceryAddition=()=>{
    if (!items) return
   
    const listItems=[... items,grocery]

    setItems(listItems)
    setGrocery('')

  }
  const deleteGroceryItem=(item)=>{
    const newList=items.filter((itemName)=>{
      return itemName !== item
    })
    setItems(newList)

  }
  return <>
    <div className="form-control">
      <input type="text"
       name="grocery"
        id="grocery"
        value={grocery} 
        onChange={handleGroceryChange} />
         <button className="submit-btn" onClick={handleGroceryAddition}>Submit</button>
    
    {items.length===0 ? null : <div className="grocery-container">
      {items.map((groceryItem,index)=>{
        return <>
        <div className="grocery-item">
         <h4  key={index}>{groceryItem}</h4>
        <button className='delete-btn' onClick={()=>deleteGroceryItem(groceryItem)}>Delete</button>
        </div>
       
        </>
      })}
   
    </div> }
    {items.length>0 && <button className='clear-btn' onClick={()=>setItems([])}>CLEAR</button>}
    
   </div>
  </>
}

export default List