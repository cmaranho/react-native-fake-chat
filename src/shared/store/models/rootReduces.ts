import { combineReducers } from 'redux';

import data from './data/reducer';
import user from './user/reducer';

export default combineReducers({
  data,
  user,
});
