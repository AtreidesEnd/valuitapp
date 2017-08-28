import { combineReducers } from 'redux';
import NavsReducer from './reducer_appnavs';
import ValMainReducer from './reducer_valmain';
import ModalReducer from './reducer_modal';

const rootReducer = combineReducers({
  navs : NavsReducer,
  valMain : ValMainReducer,
  modals : ModalReducer,
});

export default rootReducer;
