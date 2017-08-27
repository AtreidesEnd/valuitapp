import React, {Component} from 'react';
import {connect} from 'react-redux';
import ValuationMain from './valuation-main';

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
    if (appModules[this.props.selected].hasDetail) {
      if (this.props.selected === "Valuation Model") {
        appDiv = (
          <div className="app-main-div">
            <ValuationMain/>
          </div>
        );
      } else {
        appDiv = (
          <div className="app-main-div">
            <div className="app-main-core">{appModules[this.props.selected].title}</div>
            <div className="app-main-det">Detail section here</div>
          </div>
        );
      }
    } else {
      appDiv = (
        <div className="app-main-div">
          <div className="app-main-core">{appModules[this.props.selected].title}</div>
        </div>
      );
    }
    return appDiv;
  }

  render() {
    return this.renderMain();
  }
}

function mapStateToProps(state) {
  return {
    selected: state.navs.selectedNav
  };
}

export default connect(mapStateToProps)(AppMain);
