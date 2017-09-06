import cuid from 'cuid';

export default function(state = null, action) {
  //==== BEGIN CLASS DEFINITIONS ====//
  class ValueFolder {
    constructor(name, parent) {
      this.id = cuid();           // preparing for database use
      this.name = name || this.id.substring(0, 6); // this will be the display name
      this.description = '';
      this.segments = [];
      this.childFolders = [];
      this.childDrivers = [];
      this.parent = parent;
    }
  }

  class ValueDriver {
    constructor(name, parent, segments) {
      this.id = cuid();             // preparing for database use
      this.name = name || this.id.substr(0, 6);  // this will be the display name
      this.description = '';    // detail description (available in right-side pane)
      this.parent = parent;
      this.segments = segments; // defaults to segments from parent
      this.isRevenue = true;    // Revenue=true, Cost=false
      this.isShared = false;    // is it a direct/sole driver or a shared driver
      this.valueStream = [];    // actual values
    }

    addCell(date, value, style) {
      this.valueStream[date] = new ValueCell(date, value, style);
    }

    addStream(startDate, values, style) {
      values.forEach((value) => {
        let date = startDate++;
        this.valueStream[date] = new ValueCell(date, value, style);
      });
    }
  }

  class ValueCell {
    constructor(date, value, style = {}) {
      this.id = '';
      this.date = date;         // for now, date is integer - months since T0
      this.value = value;       // integer value, full value - should be formatted later
      this.style = style;       // css style object
    }
  }
  //==============================//
  //==== DATA MODEL FUNCTIONS ====//
  var newFolder = function (name, parentID = null, valData) {
    const newFolder = new ValueFolder(name, parentID);
    valData.folders[newFolder.id] = newFolder;
    // keep track of folders that have no parents as 'root' folders
    if (!parentID) {
      valData.roots[newFolder.id] = null;
    } else {
      valData.folders[parentID].childFolders.push(newFolder.id);
    }
    return newFolder;
  };

  var newDriver = function (name, parentID, valData) {
    if (!parentID) { throw new Error('Invalid add driver, parent is required!'); }
    const newDriver = new ValueDriver(name, parentID, valData.folders[parentID].segments);
    valData.drivers[newDriver.id] = newDriver;
    valData.folders[parentID].childDrivers.push(newDriver.id);
    return newDriver;
  };
  //==============================//

  let timeConfig = {
    // VIEW properties corresponds to what's displayed //
    timeViewIndices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    timeViewInterval: 'Monthly',
    timeViewStartMonth: 1,
    timeViewStartYear: 2017,
    // VAL properties correspond to the actual time interval being referenced //
    // e.g.: year 2 month 1 will DISPLAY as '1' but is calculated as month 13 //
    timeValIndices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    projectTimeSettings: {
      startYear: 2017,
      startMonth: 1,
      defaultInterval: 'Monthly',
    },
  };


  if (!state) { // mock state for testing
    var valData = {}; // core value model data object
    valData.folders = {}; // set of all folders
    valData.drivers = {}; // set of all drivers
    valData.roots = {}; // set of all roots
    // building up US data
    let us = newFolder('US', null, valData);
    let usSales = newDriver('US Global Sales', us.id, valData);
    usSales.addStream(1, [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]);
    let usCosts = newDriver('US Global G&A', us.id, valData);
    usCosts.addStream(1, [-20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20]);
    let ec = newFolder('East Coast', us.id, valData);
    let nySales = newDriver('NY Sales', ec.id, valData);
    nySales.addStream(1, [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]);
    let nyCosts = newDriver('NY COGS', ec.id, valData);
    nyCosts.addStream(1, [-60, -60, -60, -60, -60, -60, -60, -60, -60, -60, -60, -60]);

    let emea = newFolder('EMEA', null, valData);
    let emeaSales = newDriver('EMEA Global Sales', emea.id, valData);
    emeaSales.addStream(1, [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]);
    let emeaCosts = newDriver('EMEA Global G&A', emea.id, valData);
    emeaCosts.addStream(1, [-20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20]);
    // console.log(valData);

    return {
      timeConfig: timeConfig,
      valData: valData,
    };
  } else {
    let valData = Object.assign({}, state.valData);
    let timeConfig = Object.assign({}, state.timeConfig);
    // handle actions here
    if (action.type === 'ADD_NEW_FOLDER') {
      // const parentID = action.payload;
      var nf = newFolder(action.payload.name, null, valData);
      nf.description = action.payload.desc;
      nf.segments = action.payload.segments;

    } else if (action.type === 'ADD_NEW_DRIVER') {
      const id = action.payload;
      const parent = valData.folders[id] ? id : valData.drivers[id].parent;
      newDriver(null, parent, valData);
    }
    return {valData, timeConfig};
  }
}
