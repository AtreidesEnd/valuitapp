import React, {Component} from 'react';
import ValtableRow from './valtable-row';

export default class ValtableBody extends Component {
  constructor(props) {
    super(props);
  }

  recurseFolders(folder,res,depth) {
    const {valData,timeConfig} = this.props;
    res.push( // first insert the row label (the folder)
      <ValtableRow key={folder.id} header={folder.name} headerid = {folder.id}
        timeValIndices={timeConfig.timeValIndices}
        valueStream={null}
        type='folder'
        depth={depth}
      />
    ); // then see if it has child folders, if so recursively process them
    if (folder.childFolders.length > 0) {
      folder.childFolders.forEach(folderId => {
        this.recurseFolders(valData.folders[folderId],res,depth+1);
      });
    } // then see if it has child drivers, if so process each of them
    if (folder.childDrivers.length > 0) {
      folder.childDrivers.forEach((driverId) => {
        const driver = valData.drivers[driverId];
        res.push(
          <ValtableRow key={driver.id} header={driver.name} headerid = {driver.id}
            timeValIndices={timeConfig.timeValIndices}
            valueStream={driver.valueStream}
            type='driver'
            depth={depth+1}
          />
        );
      });
    }
    return;
  }

  renderBodyRows() {
    const {valData} = this.props;
    if (!valData) return null;
    let res = [];
    for (var root in valData.roots) {
        this.recurseFolders(valData.folders[root],res,1);
    }
    return res;
  }

  render() {
    return (
      <tbody>
        {this.renderBodyRows()}
      </tbody>
    );
  }
}
