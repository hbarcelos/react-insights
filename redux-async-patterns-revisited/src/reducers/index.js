import { combineReducers } from 'redux';

import user from './user';
import dashboardSequenced from './dashboard-sequenced';
import dashboardNonSequenced from './dashboard-non-sequenced';
import dashboardNonSequencedNonBlocking from './dashboard-non-sequenced-non-blocking';

export default combineReducers({
  user,
  dashboardSequenced,
  dashboardNonSequenced,
  dashboardNonSequencedNonBlocking,
})

