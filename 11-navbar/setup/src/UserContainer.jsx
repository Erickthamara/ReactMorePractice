import React from 'react'
import { useContext } from 'react'
import { NavContext } from './Navbar'

const UserContainer = () => {
   const {user,logOut}=useContext(NavContext)

  return (
    <div>
        {user? <><p>My name is {user?.name?.toUpperCase()}</p>
      <button onClick={logOut}>Log Out</button></> : <p>Login</p> }
        
      
    </div>
  )
}

export default UserContainer
