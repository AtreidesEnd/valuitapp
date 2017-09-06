import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import NewFolderForm from '../components/new-folder-form';
import NewDriverForm from '../components/new-driver-form';
import {handleFormSubmit, handleFormCancel} from '../actions/modal-actions';

class ModalWrapper extends Component {
  componentDidMount() {
    window.componentHandler.upgradeElements(findDOMNode(this));
  }
  componentWillUnmount() {
    const element = findDOMNode(this);
    window.componentHandler.downgradeElements(element);
  }

  render() {
    const classes = classNames('modal-wrapper');
    if (!this.props.modals.isActive) { return null; } else {
      return (<div className={classes}>{this.pickForm()}</div>);
    }
  }

  pickForm() {
    const {modals, handleFormSubmit, handleFormCancel} = this.props;
    var compProps = {modalData: modals.modalData, modalActions: {handleFormSubmit, handleFormCancel}};
    if (modals.activeModal === 'NewFolder') {
      return (<NewFolderForm {...compProps} />);
    } else if (modals.activeModal === 'NewDriver') {
      return (<NewDriverForm {...compProps} />);
    }
  }
}

function mapStateToProps(state) {
  return {
    modals: state.modals,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({handleFormSubmit, handleFormCancel}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalWrapper);
