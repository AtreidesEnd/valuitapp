import { combineReducers } from 'redux';
import NavsReducer from './reducer_appnavs';

const rootReducer = combineReducers({
  navs : NavsReducer,
});

export default rootReducer;
