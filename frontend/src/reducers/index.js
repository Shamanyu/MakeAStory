import { combineReducers } from 'redux';

import userData from './userData';

const Reducers = combineReducers({
  userData,
});

export { userData };
export default Reducers;