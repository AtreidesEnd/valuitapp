import React, {Component} from 'react';

export default class ValtableRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
    );
  }
}
