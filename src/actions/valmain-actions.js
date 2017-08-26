export function addDriver(stuff) {
  return {
    type: 'ADD_NEW_DRIVER',
    payload: stuff,
  };
}

export function addFolder(stuff) {
  return {
    type: 'ADD_NEW_FOLDER',
    payload: stuff,
  };
}

export function showDetail(stuff) {
  return {
    type: 'SHOW_DETAIL',
    payload: stuff,
  };
}

export function hideDetail(stuff) {
  return {
    type: 'HIDE_DETAIL',
    payload: stuff,
  };
}
