import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const {toggleModal,settoggleModal,toggleSideBar,settoggleSideBar}=useGlobalContext()
  return <aside className={`sidebar ${toggleSideBar && `show-sidebar`}`}>
    <div className="sidebar-header">
      <img src={logo} alt="Logo" className='logo' />
      <button className='close-btn'>
        <FaTimes onClick={()=>settoggleSideBar(!toggleSideBar)}/>
      </button>
    </div>
    <ul className="links">
      {links.map((link)=>{
        const{id,url,text,icon}=link
        return <li key={id}>
          <a href={url}>
            {icon}
            {text}
          </a>
        </li>
      })}
    </ul>
    <ul className="social-icons">
      {social.map((socialIcon)=>{
        const{id,url,icon}=socialIcon
        return <li key={id}>
          <a href={url}>
            {icon}
          </a>
        </li>
      })}
    </ul>
  </aside>
}

export default Sidebar
