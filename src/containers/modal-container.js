import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ModalContainer extends Component {

  render() {
    const modals = this.props.modals;
    return (<div className="modal-container">{modals.activeModal}</div>);
  }
}

function mapStateToProps(state) {
  return {
    modals: state.modals,
  };
}

export default connect(mapStateToProps,null)(ModalContainer);
