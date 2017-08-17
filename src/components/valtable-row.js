import React, {Component} from 'react';

export default class ValtableRow extends Component {
  constructor(props) {
    super(props);
  }

  renderRowCells() {
    // array of the time values that are in view, measured in months since project start months
    // if aggregating above monthly view, this will be a multi-dimensional array
    // i.e. Quarterly year one would be: [[1,2,3],[4,5,6],[7,8,9],[10,11,12]]
    const timeValIndices = this.props.timeValIndices;
    const valueStream = this.props.valueStream;
    if (!valueStream || valueStream.length===0) return null;
    let tdArray = timeValIndices.map((timeGroup) => {
      timeGroup = Array.isArray(timeGroup) ? timeGroup : [timeGroup];
      return timeGroup.reduce((sum,cur) => sum+valueStream[cur].value,0)
    });

    const cellClass = "valmain-table-body-cell";
    const cellPos = "valmain-cell-positive";
    const cellNeg = "valmain-cell-negative";
    console.log(tdArray);
    return tdArray.map((val,ind) => {
      let resClass = cellClass + ' ' + ((val<0) ? cellNeg : cellPos);
      return <td key={this.props.header+'-'+this.props.timeValIndices[ind]} className={resClass}>{val}</td>
    });
  }

  render() {
    const trClasses = "valmain-table-body-row";
    const thClasses = "valmain-table-body-row-header";
    console.log(this.renderRowCells());
    return (
      <tr className={trClasses}>
        <th key={this.props.header+'-0'} className={trClasses}>{this.props.header}</th>
        {this.renderRowCells()}
      </tr>
    );
  }
}
