import React, {Component} from 'react';
import {connect} from 'react-redux';
import ValtableHeader from '../components/valtable-header';

export class ValuationMain extends Component {
  render() {
    return (
      <div className="valmain-table-div">
        <table className="mdl-data-table mdl-js-data-table valmain-table">
          <ValtableHeader timePeriods={[1,2,3,4,5,6,7,8,9,10,11,12]}/>
          <tbody>
            <tr className="valmain-table-body-row">
              <th className="valmain-table-body-row-header">Region 1</th>
            </tr>
            <tr className="valmain-table-body-row">
              <th className="valmain-table-body-row-header"><span className="spacer"/>Product 1</th>
            </tr>
            <tr className="valmain-table-body-row">
              <th className="valmain-table-body-row-header">Product 1 Sales</th>
              <td className="valmain-table-body-cell"></td>
            </tr>
            <tr className="valmain-table-body-row">
              <th className="valmain-table-body-row-header">Product 1 COGS</th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
