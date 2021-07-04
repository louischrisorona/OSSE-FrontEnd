import { combineReducers } from 'redux';
import registrationReducer from './registrationReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  registrationReducer,
  loginReducer,
});

export default rootReducer;
