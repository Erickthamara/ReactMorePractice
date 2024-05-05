import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
const Modal = () => {
   const {toggleModal,settoggleModal,toggleSideBar,settoggleSideBar}=useGlobalContext()
  return <div className={`modal-overlay ${toggleModal && `show-modal`}`}>
    <div className="modal-container">
      <h3>Modal Content</h3>
      <button className='close-modal-btn' onClick={(()=>settoggleModal(!toggleModal))}><FaTimes/></button>
    </div>
  </div>
}

export default Modal
