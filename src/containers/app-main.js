import React, {Component} from 'react';
import {connect} from 'react-redux';

class AppMain extends Component {

  renderMain() {
    // todo replace the below with actual modules for each
    const appModules = {
      'Dashboard': {title:"This is the dashboard module.", hasDetail:false},
      'Forecasts': {title:"This is the forecasts module.", hasDetail:false},
      'Valuation Model': {title:"This is the valuation module.", hasDetail:true},
      'Assumptions': {title:"This is the assumptions module.", hasDetail:true},
      'Change Tracker': {title:"This is the change tracker module.", hasDetail:true},
    }

    let appDiv;
    if (this.props.selected && appModules[this.props.selected].hasDetail) {
      appDiv = (
        <div className="app-main-div mdl-shadow--4dp">
          <div className="app-main-core">{appModules[this.props.selected].title}</div>
          <div className="app-main-det">Detail section here</div>
        </div>
      );
    } else if (this.props.selected) {
      appDiv = (
        <div className="app-main-div mdl-shadow--4dp">
          <div className="app-main-core">{appModules[this.props.selected].title}</div>
        </div>
      );
    } else {
      appDiv = <div className="app-main-div mdl-shadow--4dp"> Select a module to get started.</div>
    }
    return appDiv;
  }

  render() {
    return (
      <div className="app-main-cell mdl-cell mdl-cell--10-col">
        {this.renderMain()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selected: state.navs.selectedNav
  };
}

export default connect(mapStateToProps)(AppMain);
