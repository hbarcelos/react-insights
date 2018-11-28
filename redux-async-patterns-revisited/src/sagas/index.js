import { takeLatest, fork, all } from 'redux-saga/effects';
import { loadUser } from './user';
import { loadDashboardSequenced } from './dashboard-sequenced';
import { loadDashboardNonSequenced } from './dashboard-non-sequenced';
import dashboardNonSequencedNonBlocking from './dashboard-non-sequenced-non-blocking';

export default function* rootSaga() {
  yield all([
    fork(loadUser),
    takeLatest('LOAD_DASHBOARD_SEQUENCED', loadDashboardSequenced),
    takeLatest('LOAD_DASHBOARD_NON_SEQUENCED', loadDashboardNonSequenced),
    dashboardNonSequencedNonBlocking
    // takeLatest('LOAD_DASHBOARD_NON_SEQUENCED_NON_BLOCKING', loadDashboardNonSequencedNonBlocking),
    // fork(isolatedFlight),
    // fork(isolatedForecast),
  ]);
}
