import React, { useState, useContext } from 'react'


const AppContext=React.createContext()

const AppProviderComponent=({children})=>{
    const [toggleModal, settoggleModal] = useState(false)
    const [toggleSideBar, settoggleSideBar] = useState(false)
    const value={toggleModal,settoggleModal,toggleSideBar,settoggleSideBar}
    return <AppContext.Provider value={value}>{children}
    </AppContext.Provider> 
}

export {AppContext,AppProviderComponent}

//Create a csutom hook that will grab the context

export const useGlobalContext=()=>{
    return useContext(AppContext)
}