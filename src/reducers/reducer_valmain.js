export default function(state = null, action) {

  class ValueFolder {
    constructor(parent,name) {
      this.id = "";           // preparing for database use
      this.name = name;       // this will be the display name
      this.description = "";
      this.segments = [];
      this.childFolders = [];
      this.childDrivers = [];
      this.parent = parent;
    }

    addFolder(name = "new folder") {
      this.childFolders.push(new ValueFolder(this,name));
    }

    addDriver(name = "new driver") {
      this.childDrivers.push(new ValueDriver(this,name,this.segments));
    }

  }

  class ValueDriver {
    constructor(parent,name,segments) {
      this.id = "";             // preparing for database use
      this.name = name;         // this will be the display name
      this.description = "";    // detail description (available in right-side pane)
      this.parent = parent;
      this.segments = segments; // defaults to segments from parent
      this.isRevenue = true;    // Revenue=true, Cost=false
      this.isShared = false;    // is it a direct/sole driver or a shared driver
      this.valueStream = [];    // actual values
    }

    addCell(date,value,style) {
      this.valueStream[date]= new ValueCell(date,value,style);
    }

    addStream(startDate,values,style) {
      values.forEach((value) => {
        let date = startDate++;
        this.valueStream[date]= new ValueCell(date,value,style);
      });
    }

  }

  class ValueCell {
    constructor(date,value,style={}) {
      this.id = "";
      this.date = date;         // for now, date is integer - months since T0
      this.value = value;       // integer value, full value - should be formatted later
      this.style = style;       // css style object
    }
  }

  let timeConfig = {
    timeViewIndices: [1,2,3,4,5,6,7,8,9,10,11,12],
    timeViewInterval: 'Monthly',
    timeViewStartMonth: 1,
    timeViewStartYear: 2017,
    timeValIndices: [1,2,3,4,5,6,7,8,9,10,11,12],
    projectTimeSettings: {
      startYear: 2017,
      startMonth: 1,
      defaultInterval: 'Monthly',
    },
  };

  if (!state) {
    // default folder data setup
    let root1 = new ValueFolder(null,"US");
    let root2 = new ValueFolder(null,"EMEA");

    let negStyle = {
      color: 'darkred',
      backgroundColor: 'hsl(0,100%,95%)',
    }

    let posStyle = {
      color: 'darkgreen',
      backgroundColor: 'hsl(120,100%,95%)',
    }

    root1.addFolder("East Coast");
    root1.addDriver("US Global Sales");
    root1.addDriver("US Global G&A");
    root1.childFolders[0].addDriver("NY Sales");
    root1.childFolders[0].childDrivers[0].addStream(1,[50,50,50,50,50,50,50,50,50,50,50,50],posStyle);
    root1.childFolders[0].addDriver("NY COGS");
    root1.childFolders[0].childDrivers[1].addStream(1,[-20,-20,-20,-20,-20,-20,-20,-20,-20,-20,-20,-20],negStyle);
    root2.addDriver("EMEA Global Sales");
    root2.addDriver("EMEA Global G&A");

    let valData = [root1, root2];

    return {
      timeConfig: timeConfig,
      valData: valData,
    }
  }
  return state;
}
