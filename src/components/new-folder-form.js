import React from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';

class NewFolderForm extends React.Component {
  render() {
    const classes = classNames('modal-form','mdl-card','mdl-shadow--2dp');
    return (<div className={classes}>I'm the new folder div.</div>);
  }
}

export default NewFolderForm;
