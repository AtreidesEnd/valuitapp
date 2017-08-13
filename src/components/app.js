import React, { Component } from 'react';

import AppNav from '../containers/app-nav';
import AppMain from '../containers/app-main';

export default class App extends Component {
  render() {
    return (
      <div className="page-content mdl-grid mdl-grid--no-spacing">
        <AppNav />
        <AppMain />
      </div>
    );
  }
}
