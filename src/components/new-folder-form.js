import React from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
//TODO: possibly refactor this using ValueLink model from Volicon ValueLink library
class NewFolderForm extends React.Component {
  constructor(props) {
    super(props);
    this.formType = 'NEW_FOLDER';
    this.state = {
      name: '',
      desc: '',
      segments: '',
      parent: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  componentDidMount() {
    window.componentHandler.upgradeElements(findDOMNode(this));
  }
  componentWillUnmount() {
    const element = findDOMNode(this);
    window.componentHandler.downgradeElements(element);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.modalActions.handleFormSubmit({data: this.state, type: this.formType});
  }

  onCancel(event) {
    event.preventDefault();
    this.props.modalActions.handleFormCancel();
  }

  renderForm() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="modal-form-header">New Folder</div>
        <div className="modal-form-descriptor">Please fill in the below details for your new folder.</div>
        <div className="modal-form-field mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <label htmlFor="new-folder-name" className="modal-text-label mdl-textfield__label">Folder Name...</label>
          <input id="new-folder-name" className="modal-text-input mdl-textfield__input"
            type="text" value={this.state.name}
            onChange={e => this.setState({ name: e.target.value})}
          />
        </div>
        <div className="modal-form-field mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <label htmlFor="new-folder-desc" className="modal-text-label mdl-textfield__label">Folder Description...</label>
          <textarea id="new-folder-desc" className="modal-text-input mdl-textfield__input"
            type="text" rows="2" value={this.state.desc} onChange={e => this.setState({ desc: e.target.value})}>

          </textarea>
        </div>
        <div className="modal-form-field mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <label htmlFor="new-folder-segments" className="modal-text-label mdl-textfield__label">Segments/categories (comma-separated)</label>
          <input id="new-folder-segments" className="modal-text-input mdl-textfield__input"
            type="text" value={this.state.segments}
            onChange={e => this.setState({ segments: e.target.value})}
          />
        </div>
        <div className="modal-form-submit-div">
          <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
            onClick={()=>this.props.modalActions.handleFormCancel()}>Cancel</button>
          <button type="Submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Submit</button>
        </div>
      </form>
    );
  }

  render() {
    const classes = classNames('modal-form', 'mdl-card', 'mdl-shadow--2dp');
    return (<div className={classes}>{this.renderForm()}</div>);
  }
}

export default NewFolderForm;
