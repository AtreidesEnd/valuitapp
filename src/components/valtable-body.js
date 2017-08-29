import React, {Component} from 'react';
import ValtableRow from './valtable-row';
import _ from 'lodash';

export default class ValtableBody extends Component {
  constructor(props) {
    super(props);
  }

  recurseFolders(folder,res,depth) {
    const {valData,timeConfig,actions} = this.props;
    res.push(this.renderRow(folder,'folder',timeConfig,depth,actions)); // push the folder
    if (folder.childFolders.length > 0) { // then see if it has child folders, if so recursively process them
      folder.childFolders.forEach(folderId => {this.recurseFolders(valData.folders[folderId],res,depth+1)});
    } // then see if it has child drivers, if so process each of them
    if (folder.childDrivers.length > 0) {
      folder.childDrivers.forEach((driverId) => {
        const driver = valData.drivers[driverId];
        res.push(this.renderRow(driver,'driver',timeConfig,depth+1,actions));
      });
    }
  }

  renderRow(entity,type,timeConfig,depth,actions) {
    return (
      <ValtableRow key={entity.id} header={entity.name} headerid = {entity.id}
        timeValIndices={timeConfig.timeValIndices} valueStream={entity.valueStream}
        type={type} depth={depth+1} actions={actions}
      />
    );
  }

  renderBodyRows() {
    const {valData} = this.props;
    if (!valData) return null;
    let res = [];
    _.forOwn(valData.roots,(a,root)=>{this.recurseFolders(valData.folders[root],res,1)});
    return res;
  }

  render() {
    return (
      <div className='valmain-table-body'>
        {this.renderBodyRows()}
      </div>
    );
  }
}
