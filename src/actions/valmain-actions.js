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
