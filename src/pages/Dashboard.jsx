import React from 'react'
import './Dashboard.css';
import {IoIosPeople} from "react-icons/io";
import {FiChevronRight} from "react-icons/fi";
import logo from '../data/onlylogo.png';
import {moneylogo} from '../data/dummy'
import money from '../data/money.png';
import {BsFillTelephoneXFill} from "react-icons/bs";
import {VscPieChart} from "react-icons/vsc";
import {Pie,Table,Button,Stacked,Table_2} from '../components/';
import {ComplainceData,DuetaskData} from '../data/dummy';
import { SparklineAreaData,ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
const Dashboard = () => {
    return (
    
        <div className='Dash'>
            <div className='card'>
             <div className='pie bg-white cont'>
                <Pie/>
             </div>
                <div className="clint_data cont">
                    <Button ico={<IoIosPeople/>} icon_head="No of Investers" icon_money="234556" id="king"/>
                
                    <Button ico={<BsFillTelephoneXFill/>} icon_head="SIP Clients" icon_money="4.035"/>
             </div>
             <div className="sip_data cont">
             <Button ico={<img src={money} alt='money' style={{height:'50px'}}/>} icon_head="No of Investers" icon_money="234556" />
             <Button ico={<VscPieChart/>} icon_head="SIP Count in JUN22" icon_money="4035"/>
             </div>
            </div>
            <div className='card'>
            <div className="business_update ml-6">
                <div className="heading flex gap-4 m-4 justify-between">
                    <div className='flex'>
                            <span className='text-xl font-bold'>Business update</span>
                        
                            <select name="drop" id="drop" className='bg-sky-500 ml-4 shadow-md p-2 text-white cursor-pointer'>
                                <option value="volvo">This month</option>
                                <option value="saab">year</option>
                                <option value="opel">weak</option>
                            </select>
                    </div>
                    <div className='flex cursor-pointer' style={{}}>
                        <span className="text-sky-400">View More</span><FiChevronRight color="aqua" className='ml-4px'/>
                    </div>
                </div>
                <div className="table_data">
                    <Table/>
                </div>
            </div>
            </div>
            <div className="trans_data">
                <div className="trans sm:w-5/6 lg:w-1/2">
                    <Stacked/>
                </div>
                <div className="events sm:w-5/6 lg:w-1/3">
                    <div className="complaince">
                        <Table_2 tab_header="Complaince" tableData={ComplainceData}/>
                    </div>
                    <div className="duetask">
                        <Table_2 tab_header="Due Task" tableData={DuetaskData}/>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Dashboard


