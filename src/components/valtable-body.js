import React, {Component} from 'react';
import ValtableRow from './valtable-row';

export default class ValtableBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tbody>
        <tr className="valmain-table-body-row">
          <th className="valmain-table-body-row-header">Product 1 Sales</th>
          <td className="valmain-table-body-cell valmain-cell-positive">100</td>
          <td className="valmain-table-body-cell valmain-cell-positive">80</td>
          <td className="valmain-table-body-cell valmain-cell-positive">80</td>
          <td className="valmain-table-body-cell valmain-cell-positive">80</td>
          <td className="valmain-table-body-cell valmain-cell-positive">80</td>
          <td className="valmain-table-body-cell valmain-cell-positive">80</td>
          <td className="valmain-table-body-cell valmain-cell-positive">80</td>
          <td className="valmain-table-body-cell valmain-cell-positive">60</td>
          <td className="valmain-table-body-cell valmain-cell-positive">60</td>
          <td className="valmain-table-body-cell valmain-cell-positive">60</td>
          <td className="valmain-table-body-cell valmain-cell-negative">(50)</td>
          <td className="valmain-table-body-cell valmain-cell-negative">(40)</td>
        </tr>
      </tbody>
    );
  }
}
