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
        <li key={headerid+'newfolder'} className="mdl-menu__item app-menu-item" onClick={() => actions.addFolder(headerid)}>New Folder</li>,
        <li key={headerid+'newdriver'} className="mdl-menu__item app-menu-item" onClick={() => actions.addDriver(headerid)}>New Driver</li>
      ]
    } else {
      children = [
        <li key={headerid+'newdriver'} className="mdl-menu__item app-menu-item" onClick={() => actions.addDriver(headerid)}>New Driver</li>,
      ]
    }
    return (<Menu className="app-menu" children={children} ripple={true} target={'menu-'+headerid} />);
  }

  renderRowCells() {
    // array of the time values that are in view, measured in months since project start months
    // if aggregating above monthly view, this will be a multi-dimensional array
    // i.e. Quarterly year one would be: [[1,2,3],[4,5,6],[7,8,9],[10,11,12]]
    const {timeValIndices,valueStream,headerid} = this.props;
    let tdArray = timeValIndices.map((timeGroup) => {
      timeGroup = Array.isArray(timeGroup) ? timeGroup : [timeGroup];
      return timeGroup.reduce((sum,cur) => {
        return (valueStream && valueStream[cur]) ? sum+valueStream[cur].value : '';
      },0);
    });

    const cellClass = 'valmain-table-body-cell';
    const cellPos = 'valmain-cell-positive';
    const cellNeg = 'valmain-cell-negative';
    return tdArray.map((val,ind) => {
      let resClass = classNames(cellClass, {[cellNeg]:val<0, [cellPos]:val>0});
      return (
        <div
          key={headerid+'-'+timeValIndices[ind]}
          className={resClass}><span>{val}</span>
        </div>);
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
        <div style={nestedIndent} className={thClasses}>
          <i className={iconClasses+'-type'}>{decoIcon}</i>
          <span>{header}</span>
          <button id={'menu-'+headerid} className={btnClasses}>
            <i className={iconClasses+'-menu'}>more_vert</i>
          </button>
          {this.renderMenu()}
        </div>
      );
    }

    render() {
      const trClasses = "valmain-table-body-row";
      return (
        <div className={trClasses}>
          {this.renderHead()}
          {this.renderRowCells()}
        </div>
      );
    }
  }
