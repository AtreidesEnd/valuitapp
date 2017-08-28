import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ModalContainer from './modal-container';

class ModalWrapper extends Component {

  render() {
    const modals = this.props.modals;
    if (!modals.isActive) {
      return null;
    } else {
      return (<div className="modal-wrapper"><ModalContainer/></div>);
    }
  }
}

function mapStateToProps(state) {
  return {
    modals: state.modals,
  };
}

export default connect(mapStateToProps,null)(ModalWrapper);
