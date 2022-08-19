import React from 'react'
import{BiRupee } from 'react-icons/bi';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
/* import {Chart,Tooltip,ArcElement,Title,Legend} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
Chart.register(Tooltip,ArcElement,Title,Legend); */
/* const data = {
    labels: [
      'Equity',
      'Non Equity'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300,100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'red'
        
      ],
      hoverOffset: 4
    }]
  }; */
 /*  const options = {
    Legend: {
      display: true,
      position: "right"
    } 
}*/
const percentage = 66;
const  amount=408.00;
const Pie = () => {
    return (
        <div className="peiheader">
          <span className='text-2xl font-extrabold ml-2'>AMU</span>
        <div className='flex justify-between'>
          <div className="ml-4 circularbar" style={{width: 130, height:100}}>
            <CircularProgressbar value={percentage} text={`${amount}.00 cr`} styles={buildStyles({
                rotation: 0.25,    
                strokeLinecap: 'butt',
                textSize: '16px',
                pathTransitionDuration: 0.5,
                // pathTransition: 'none',
                // Colors
                pathColor: `rgba(245,9,5, ${percentage / 100})`,
                textColor: '#000',
                trailColor: '#fca5a5',
                backgroundColor: 'red',
              })}/>
          </div>
          <div className='piedetails mr-3 '>
            <span className='bg-red-700 text-red-700'>' '</span><span className='ml-4'>Equity</span>
            <span className='block relative'><BiRupee/>280.77 cr({`${percentage}%`})</span>
            <span className='bg-red-300 text-red-300'>' '</span><span className='ml-4'>Non Equity</span>
            <span className='block'><BiRupee/>280.77 cr({`${100-percentage}%`})</span>
          </div>
        </div>
        </div>
    )
}

export default Pie
