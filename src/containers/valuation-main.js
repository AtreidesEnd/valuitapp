import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addDriver, addFolder} from '../actions/valmain-actions';
import ValtableHeader from '../components/valtable-header';
import ValtableBody from '../components/valtable-body';

class ValuationMain extends Component {
  render() {
    const {addDriver, addFolder, valData, timeConfig} = this.props;
    return (
      <div className="valmain-table-div">
        <table className="mdl-data-table mdl-js-data-table valmain-table">
          <ValtableHeader timePeriods={timeConfig.timeViewIndices}/>
          <ValtableBody valData={valData} timeConfig={timeConfig} actions={{addDriver, addFolder}}/>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    timeConfig: state.valMain.timeConfig,
    valData: state.valMain.valData,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addDriver, addFolder},dispatch);
}
//mapDispatchToProps
export default connect(mapStateToProps,mapDispatchToProps)(ValuationMain);
