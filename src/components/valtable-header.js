import React, {Component} from 'react';

export default class ValtableHeader extends Component {
  constructor(props) {
    super(props);
  }

  renderTimeCells() {
    let classes = 'valmain-table-time-cell';
    return this.props.timePeriods.map(
      (time) => (<div key={time} className={classes}><span>{time}</span></div>));
  }

  render() {
    let headClasses = 'valmain-table-head';
    let rowClasses = 'valmain-table-head-row';
    let valdriverClasses = 'valmain-thead-valdriver';
    return (
      <div className={headClasses}>
        <div className={valdriverClasses}>Value Drivers</div>
        {this.renderTimeCells()}
      </div>
    );
  }
}
