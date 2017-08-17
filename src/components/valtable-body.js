import React, {Component} from 'react';
import ValtableRow from './valtable-row';

export default class ValtableBody extends Component {
  constructor(props) {
    super(props);
  }

  recurseFolders(node,res,depth) {
    res.push( // first insert the row label (the folder)
      <ValtableRow key={node.name} header={node.name}
        timeValIndices={this.props.timeConfig.timeValIndices}
        valueStream={null}
        depth={depth}
      />
    ); // then see if it has child folders, if so recursively process them
    if (node.childFolders.length > 0) {
      node.childFolders.forEach((ele) => {
        this.recurseFolders(ele,res,depth+1);
      });
    } // then see if it has child drivers, if so process each of them
    if (node.childDrivers.length > 0) {
      node.childDrivers.forEach((driver) => {
        console.log(driver);
        res.push(
          <ValtableRow key={driver.name} header={driver.name}
            timeValIndices={this.props.timeConfig.timeValIndices}
            valueStream={driver.valueStream}
            depth={depth+1}
          />
        );
      });
    }
    return; // folders and drivers proc'd, done
  }

  renderBodyRows() {
    const valData = this.props.valData;
    if (!valData) return null;
    let res = [];
    valData.forEach((rootFolder) => this.recurseFolders(rootFolder,res,1));
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
