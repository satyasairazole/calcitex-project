import React,{createContext,useContext,useState} from 'react';
const StateContext=createContext();
const initialState={
    UserProfile:false,
    Notification:false,
}

export const ContextProvider=({children})=>{
    const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined);
   const [activeMenu, setActiveMenu] = useState(true);
   
    return (
    <StateContext.Provider value={{activeMenu,setActiveMenu,isClicked,setIsClicked,handleClick,screenSize,setScreenSize}}>
        {children}
    </StateContext.Provider>
    )
}

export const useStateContext=()=>useContext(StateContext);