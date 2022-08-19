import React from 'react'
import {MainData} from '../../data/dummy';
   
  function Table() {
    return (
      <div className="Tables">
        <table>
          <tr>
            <th></th>
            <th>Debt</th>
            <th>Equity</th>
            <th>Hybrid</th>
            <th>Liquid</th>
            <th>Arbitrag</th>
            <th>Other</th>
            <th>Total</th>
          </tr>
          {MainData.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.head}</td>
                <td>{val.debt}</td>
                <td>{val.equity}</td>
                <td>{val.Hybrid}</td>
                <td>{val.liquid}</td>
                <td>{val.arbitrag}</td>
                <td>{val.other}</td>
                <td>{val.total}</td>
              </tr>
            )
          })}
        </table>
      </div>
    );
  }

export default Table
