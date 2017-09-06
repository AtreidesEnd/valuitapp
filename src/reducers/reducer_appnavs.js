export default function(state = null, action) {

  const navsList = [
    {title: 'Dashboard', subtabs: [
      {title: 'Create new report'},
      {title: 'Download as pdf'}
    ]},
    {title: 'Forecasts', subtabs: [
      {title: 'Create new forecast'},
      {title: 'Upload forecast'}
    ]},
    {title: 'Valuation Model', subtabs: [
      {title: 'Create new revenue'},
      {title: 'Create new cost'}
    ]},
    {title: 'Assumptions', subtabs: [
      {title: 'Create new assumption'}
    ]},
    {title: 'Change Tracker', subtatbs: [
      {title: 'to be determined...'}
    ]}
  ];

  var selectedNav = 'Valuation Model';

  switch (action.type) {
  case 'APP_NAV_SELECTED':
    selectedNav = action.payload.title;
  }

  return {navsList: navsList, selectedNav: selectedNav};
}
