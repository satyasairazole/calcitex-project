import React,{useEffect} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {Navbar,Footer,Sidebar,ThemeSettings} from './components';
import background from "./data/Frame71.png";
import{Dashboard,Billing,Brokerage,BusinessAnalysis,Clients,DataManagement,EmailSchedular,FolloLookup,Insurance,InvestOnlineNSE,RiskHandling,TransactionsView,Utilities,RiskProfiling,PortfolioScreener,ComprehensivePortfolio} from './pages';
import { useStateContext } from './contexts/ContextProvider';
import './App.css';

const App = () => {
   //const activeMenu=true;
    const {activeMenu}=useStateContext();
    return (
        <div className='Appecs' style={{backgroundImage:`url(${background})`}}>
            <BrowserRouter>
            <div className='flex relative dark:bg-main-dark-bg'>
                {/* <div className="fixed right-4 bottom-4" style={{zIndex:'1000'}}>
                    <TooltipComponent>
                        <button type="button" className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{background:'blue',borderRadius:'50%'}}>
                            <FiSettings/>
                        </button>
                    </TooltipComponent>
                </div> */}
                {activeMenu ?(
                    <div className='mt-6 w-65 fixed sidebar mr-2 dark:bg-secondary-dark-bg'>
                        <Sidebar/>
                    </div>
                ):(
                    <div className='w-0 dark:bg-secondary-dark-bg'>
                        <Sidebar/>
                    </div>
                )}
                <div className={`mr-3 midbody min-h-screen w-full ${activeMenu ?'md:ml-72':'flex-2'}`
                }>
                    <div className="fixed md:static dark:bg-main-dark-bg navabar w-full">
                        <Navbar/>
                    </div>
                
                <div>
                    <Routes>
                        {/*dashboards items */}
                        <Route path="/" element={<Dashboard/>}/>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                        <Route path="/clients" element={<Clients/>}/>
                        <Route path="/follo-lookup" element={<FolloLookup/>}/>
                        <Route path="/invert-online-nse" element={<InvestOnlineNSE/>}/>
                        <Route path="/utilities" element={<Utilities/>}/>
                        <Route path="/transactions-view" element={<TransactionsView/>}/>
                        <Route path="/insurance" element={<Insurance/>}/>
                        <Route path="/business-analysis" element={<BusinessAnalysis/>}/>
                        <Route path="/data-management" element={<DataManagement/>}/>
                        <Route path="/email-scheduler" element={<EmailSchedular/>}/>
                        <Route path="/comprehensive-portfolio" element={<ComprehensivePortfolio/>}/>
                        <Route path="/brokerage" element={<Brokerage/>}/>
                        <Route path="/portfolio-screener" element={<PortfolioScreener/>}/>
                        <Route path="/riskhandling" element={<RiskHandling/>}/>
                        <Route path="/risk-profiling" element={<RiskProfiling/>}/>
                        <Route path="/billing" element={<Billing/>}/>

                        
                    </Routes>
                </div>
            </div>
        </div>
            </BrowserRouter>
        </div>
    )
}

export default App
