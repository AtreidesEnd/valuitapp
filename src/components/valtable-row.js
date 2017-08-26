import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Menu from './menu';

export default class ValtableRow extends Component {
  constructor(props) {
    super(props);
  }

  renderMenu() {
    const {headerid,type,actions} = this.props;
    let children;
    if (type === 'folder') {
      children = [
        <li className="mdl-menu__item app-menu-item" onClick={() => actions.addFolder(headerid)}>New Folder</li>,
        <li className="mdl-menu__item app-menu-item" onClick={() => actions.addDriver(headerid)}>New Driver</li>
      ]
    } else {
      children = [
        <li className="mdl-menu__item app-menu-item" onClick={() => actions.addDriver(headerid)}>New Driver</li>,
      ]
    }
    return (<Menu className="app-menu" children={children} ripple={true} target={'menu-'+headerid} />);
  }

  renderRowCells() {
    // array of the time values that are in view, measured in months since project start months
    // if aggregating above monthly view, this will be a multi-dimensional array
    // i.e. Quarterly year one would be: [[1,2,3],[4,5,6],[7,8,9],[10,11,12]]
    const {timeValIndices,valueStream,headerid} = this.props;
    if (!valueStream || valueStream.length===0) return null;
    let tdArray = timeValIndices.map((timeGroup) => {
      timeGroup = Array.isArray(timeGroup) ? timeGroup : [timeGroup];
      return timeGroup.reduce((sum,cur) => sum+valueStream[cur].value,0)
    });

    const cellClass = "valmain-table-body-cell";
    const cellPos = "valmain-cell-positive";
    const cellNeg = "valmain-cell-negative";
    return tdArray.map((val,ind) => {
      let resClass = classNames(cellClass, (val<0) ? cellNeg : cellPos);
      return (
        <td
          key={headerid+'-'+timeValIndices[ind]}
          className={resClass}>{val}
        </td>);
      });
    }

    renderHead() {
      const {type,depth,header,headerid} = this.props;
      const thClasses = "valmain-table-body-row-header";
      const nestedIndent = {paddingLeft:depth*15+'px !important'};
      const decoIcon = type === 'folder' ? 'folder' : 'attach_money';
      const iconClasses = "material-icons valmain-table-icons";
      const btnClasses = "mdl-button mdl-js-button mdl-button--icon valmain-table-icons";
      return (
        <th
          style={nestedIndent}
          className={thClasses}>
          <div>
            <i className={iconClasses+'-type'}>{decoIcon}</i>
            <span>{header}</span>
            <button id={'menu-'+headerid} className={btnClasses}>
              <i className={iconClasses+'-menu'} onClick={this.handleMenuClick}>more_vert</i>
            </button>
            {this.renderMenu()}
          </div>
        </th>
      );
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
