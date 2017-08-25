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
    return tdArray.map((val,ind) => {
      let resClass = cellClass + ' ' + ((val<0) ? cellNeg : cellPos);
      return <td key={this.props.headerid+'-'+this.props.timeValIndices[ind]} className={resClass}>{val}</td>
    });
  }

  renderHead() {
    const thClasses = "valmain-table-body-row-header";
    const nestedIndent = {paddingLeft:this.props.depth*15+'px !important'};
    const iconClasses = "material-icons valmain-table-icons";
    if (this.props.type === 'folder') {
      return (
        <th
          style={nestedIndent}
          className={thClasses}>
          <div>
            <i className={iconClasses+'-type'}>folder</i>
            <span>{this.props.header}</span>
            <i className={iconClasses+'-menu'}>more_vert</i>
          </div>
        </th>
      );
    } else {
      return (
        <th
          style={nestedIndent}
          className={thClasses}>
          <div>
            <i className={iconClasses+'-type'}>attach_money</i>
            <span>{this.props.header}</span>
            <i className={iconClasses+'-menu'}>more_vert</i>
          </div>
        </th>
      );
    }
  }

  render() {
    const trClasses = "valmain-table-body-row";
    return (
      <tr className={trClasses}>
        {this.renderHead()}
        {this.renderRowCells()}
      </tr>
    );
  }
}
