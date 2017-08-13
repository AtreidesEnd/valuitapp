import React, {Component} from 'react';
import {connect} from 'react-redux';

export class ValuationMain extends Component {
  render() {
    return (
      <div className="valmain-table-div">
        <table className="mdl-data-table mdl-js-data-table valmain-table">
          <thead className="valmain-table-header">
            <tr>
              <th rowSpan="2" className="valmain-thead-valdriver">Value Drivers</th>
              <th colSpan="12" className="valmain-thead-timeperiod">Time</th>
            </tr>
            <tr>
              <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th>
              <th>8</th><th>9</th><th>10</th><th>11</th><th>12</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Region 1</th>
            </tr>
            <tr>
              <th>Product 1</th>
            </tr>
            <tr>
              <th>Product 1 Sales</th>
            </tr>
            <tr>
              <th>Product 1 COGS</th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
