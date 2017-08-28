import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Menu from './menu';
import _ from 'lodash';

export default class ValtableTotal extends Component {
  constructor(props) {
    super(props);
  }

  renderRowCells() {
    // array of the time values that are in view, measured in months since project start months
    // if aggregating above monthly view, this will be a multi-dimensional array
    // i.e. Quarterly year one would be: [[1,2,3],[4,5,6],[7,8,9],[10,11,12]]
    const timeValIndices = this.props.timeConfig.timeValIndices;
    const drivers = this.props.valData.drivers;
    let sumArray = timeValIndices.map((timeGroup) => {
      timeGroup = Array.isArray(timeGroup) ? timeGroup : [timeGroup];
      return timeGroup.reduce((sum,cur) => {
        return sum + _.reduce(drivers,(sum,dr) => {
          return sum + ((dr.valueStream && dr.valueStream[cur]) ? dr.valueStream[cur].value : 0);
        },0);
      },0);
    });

    const cellClass = 'valmain-table-total-cell';
    const cellPos = 'valmain-cell-positive';
    const cellNeg = 'valmain-cell-negative';
    return sumArray.map((val,ind) => {
      let resClass = classNames(cellClass, {[cellNeg]:val<0, [cellPos]:val>0});
      return (
        <div
          key={'tabletotal-'+timeValIndices[ind]}
          className={resClass}><span>{val}</span>
        </div>);
      });
    }

    renderHead() {
      const thClasses = 'valmain-table-total-row-header';

      return <div className={thClasses}>Total:</div>;
    }

    render() {
      const trClasses = 'valmain-table-total-row';
      return (
        <div className={trClasses}>
          {this.renderHead()}
          {this.renderRowCells()}
        </div>
      );
    }
  }
