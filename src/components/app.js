import React, { Component } from 'react';

import AppNav from '../containers/app-nav';
import AppMain from '../containers/app-main';

export default class App extends Component {
  render() {
    return (
      // mdl-grid mdl-grid--no-spacing
      <div className="app-wrapper">
        <AppNav />
        <AppMain />
      </div>
    );
  }
}
