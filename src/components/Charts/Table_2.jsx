import React from 'react'
import {ComplainceData,DuetaskData } from '../../data/dummy';
   
  function Table_2(props) {
    return (
      <div className="Table_2">
        <table>
          <tr>
            <th>{props.tab_header}</th>
            <th></th>
          </tr>
          {props.tableData.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.problem}</td>
                <td>{val.members}</td>
                
              </tr>
            )
          })}
        </table>
      </div>
    );
  }

export default Table_2
