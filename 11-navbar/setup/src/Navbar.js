import React, { useState, useRef, useEffect,createContext } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'
import NavLinks from './NavLinks'


export const NavContext=createContext()

const Navbar = () => {
  const [user, setuser] = useState({name:'John'})
  const logOut=()=>{
    setuser(null)
  }
  return (
     <NavContext.Provider value={{user,logOut}}>
    <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="" />
        <button className='nav-toggle'><FaBars/></button>
      </div>
      
      <div className='links-container show-container'>
      <ul className="links">
        <li>
        <a href="#">Home</a>
        </li>
        </ul>
    </div>
     <NavLinks />
    </div>
    
  </nav>
  </NavContext.Provider>
  
  )
}

export default Navbar
