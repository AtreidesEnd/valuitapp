import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ValtableHeader from '../components/valtable-header';
import ValtableBody from '../components/valtable-body';

class ValuationMain extends Component {
  render() {
    return (
      <div className="valmain-table-div">
        <table className="mdl-data-table mdl-js-data-table valmain-table">
          <ValtableHeader timePeriods={this.props.timeConfig.timeViewIndices}/>
          <ValtableBody valData={this.props.valData} timeConfig={this.props.timeConfig}/>
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

/*function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectNav : selectNav},dispatch);
}*/
//mapDispatchToProps
export default connect(mapStateToProps,null)(ValuationMain);
