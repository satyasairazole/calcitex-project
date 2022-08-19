import React from 'react'
import {Link,NavLink} from 'react-router-dom';
import {SiShopware} from 'react-icons/si';

import logo from '../data/onlylogo.png';
import {MdOutlineCancel} from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {links} from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
const Sidebar = () => {
    const {activeMenu,setActiveMenu,screenSize}=useStateContext();
    const handleCloseSidebar=()=>{
        if(activeMenu && screenSize <= 900){
            setActiveMenu(false)
        }
    }
    const activeLink='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg bg-red-500 text-white text-md m-2';
    const normalLink='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md text-gray-700 bg-f-white dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
    return (
        <div className="mt-6 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 sidebarin">
        {activeMenu && (<>
            <div className="flex justify-between">
                <Link to="/" onClick={handleCloseSidebar} className="items-center gap-3 ml-2 mt-4 text-xl font-extrablod tracking-tight dark:text-white text-slate-900">
                <div className="block text-center">
                   <img src={logo} alt="Ecsfinancial"/>
                   <span className='text-4xl block text-red-600 underline font-extrabold'>Ecsfinancial</span>  
                   <span className='block text-xs text-blue-700 font-bold'>Empowering & Enabling Growth Since-1996</span>
                   <span className='block text-base text-red-500 font-medium'>Toll free:1800 425 2960</span>
                </div> 
                </Link>
                <TooltipComponent content="Menu" position="BottomCenter">
                    <button type="button" onClick={()=>setActiveMenu((preActiveMenu)=>!preActiveMenu)} className="text-xl rounded-full p-3 hover:bg-light-gray mt4 block">
                        <MdOutlineCancel/>
                    </button>
                </TooltipComponent>
            </div>
            <div className='mt-10'>
                {links.map((item)=>(
                    <div key={item.title} >
                        <p className='m-3 labname'>
                        {item.title}
                        </p>
                        {item.links.map((Link)=>(
                            <NavLink to={`/${Link.name}`}
                            key={Link.name}
                            onClick={handleCloseSidebar}
                            className={({isActive})=>isActive?activeLink:normalLink}
                            >
                            {Link.icon}
                            <span className='capatilize'>{Link.name}</span>
                            </NavLink>
                        ))}
                    </div>
                ))}
            </div>

        </>)} 
        </div>
    )
}

export default Sidebar
