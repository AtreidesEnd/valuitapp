import React, {Component} from 'react';

export default class ValtableHeader extends Component {
  constructor(props) {
    super(props);
  }

  renderTimeCells() {
    let classes = "valmain-table-time-cell";
    let fixWidth = (80/this.props.timePeriods.length)+'%';
    return this.props.timePeriods.map(
      (time) => (<th key={time} className={classes} style={{width:fixWidth}}>{time}</th>));
  }

  render() {
    let headClasses = "valmain-table-head";
    let rowClasses = "valmain-table-head-row";
    let valdriverClasses = "valmain-thead-valdriver";
    return (
      <thead className={headClasses}>
        <tr className={rowClasses}>
          <th className={valdriverClasses}>Value Drivers</th>
          {this.renderTimeCells()}
        </tr>
      </thead>
    );
  }
}
