import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectNav} from '../actions/index';
import {bindActionCreators} from 'redux';

class AppNav extends Component {
  renderNavs() {
    return this.props.navsList.map((nav) => {
      // handle the expanded active tab
      if (nav.title === this.props.selected) {
        let subtabs;
        if (nav.subtabs) {
          subtabs = nav.subtabs.map((subtab) => {
            return <li key={subtab.title} className="app-nav-subtab">{subtab.title}</li>;
          });
        }

        return (
          <div key={nav.title} className="app-nav-item is-selected">
            <a className="mdl-navigation__link">{nav.title}</a>
            <ul className="app-nav-subtab-list">{subtabs}</ul>
          </div>
        );
      } else {
        return (
          <div key={nav.title}
            className="app-nav-item"
            onClick={() => this.props.selectNav(nav)}
          >
            <a className="mdl-navigation__link">{nav.title}</a>
          </div>
        );
      }
    });
  }

  render() {
    return (
      <div className="app-nav-drawer">
        {this.renderNavs()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    navsList: state.navs.navsList,
    selected: state.navs.selectedNav,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectNav}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNav);
