import React,{useEffect} from 'react';
import {FaSearchDollar} from "react-icons/fa";
import { AiOutlineMenu } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import {UserProfile} from '.';
import { useStateContext} from '../contexts/ContextProvider';
const NavButton=({title,customFunc,icon,color,dotColor})=>(
  <TooltipComponent content={title} position="BottomCenter">
    <button type="button" onClick={customFunc} style={{color}} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
      <span style={{backgroundColor:dotColor}} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"/>       {icon}
    </button>
  </TooltipComponent>
)
const Navbar = () => {
    const{activeMenu,setActiveMenu,isClicked,setIsClicked,handleClick,screenSize,setScreenSize}=useStateContext(); 
    useEffect(()=>{
      const handleResize=()=>setScreenSize(window.innerWidth);
      window.addEventListener('resize',handleResize);
      handleResize();
      return ()=> window.removeEventListener('resize',handleResize);
    },[]);
    useEffect(()=>{
      if(screenSize<=900){
        setActiveMenu(false);
      }else{
        setActiveMenu(true);
      }
    },[screenSize]);
    return (
        <div className="flex justify-between p-2 md:mx-6 relative">
          <NavButton title="Menu" customFunc={()=>setActiveMenu((prevActiveMenu)=>!prevActiveMenu)} color="black" icon={<AiOutlineMenu/>}/>
          <input className="client_search bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder="Client Search.."/>
             <select name="drop" id="drop" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                <option value="volvo">Portfolio Valuation</option>
                <option value="saab">c</option>
                <option value="opel">O</option>
            </select>
          <div className='flex'>
 
           <TooltipComponent content='Profile' position='BottomCenter'>
            <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={()=>handleClick('userProfile')}
            >
              
              <img
                className='rounded-full w-8 h-8'
                src={avatar}
              />
                <p>
                  <span className='text-gray-400 text-14'>Hi</span>{' '}<span className='text-gray-400 font-bold ml-1 text-14'>Satyasairazole</span>
                </p>
                <MdKeyboardArrowDown className='text-gray-400 text-14'/>
            </div>
          </TooltipComponent>  
          {isClicked.userProfile && <UserProfile/>}
   {/* <NavButton title="Menu"
    customFunc={() =>{}}
    color="black" 
    icon={<AiOutlineMenu/>}
    /> */}
         </div>
        </div>
    )
}

export default Navbar
