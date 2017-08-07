import React, { Component } from 'react';

import AppNav from '../containers/app-nav';

export default class App extends Component {
  render() {
    return (
      <div className="page-content mdl-grid">
        <AppNav />
        <div className="app-main-cell mdl-cell mdl-cell--10-col">
          <div className="app-main-div mdl-shadow--4dp">
            <div className="app-main-core"></div>
            <div className="app-main-det"></div>
          </div>
        </div>
      </div>
    );
  }
}
