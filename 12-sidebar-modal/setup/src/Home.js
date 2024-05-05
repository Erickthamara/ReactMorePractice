import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Home = () => {
  const {toggleModal,settoggleModal,toggleSideBar,settoggleSideBar}=useGlobalContext()
  //console.log(toggleSideBar);
  return <main>
    <button className="sidebar-toggle">
      <FaBars onClick={()=>settoggleSideBar(!toggleSideBar)} />
    </button>
    <button className='btn' onClick={()=>settoggleModal(!toggleModal)}>Modal</button>
  </main>
}

export default Home
