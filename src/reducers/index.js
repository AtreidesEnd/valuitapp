import { combineReducers } from 'redux';
import NavsReducer from './reducer_appnavs';
import ValMainReducer from './reducer_valmain';

const rootReducer = combineReducers({
  navs : NavsReducer,
  valMain : ValMainReducer,
});

export default rootReducer;
