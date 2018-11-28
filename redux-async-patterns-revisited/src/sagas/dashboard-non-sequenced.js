import { take, call, put, select, all } from 'redux-saga/effects';
import { getDeparture, getFlight, getForecast } from '../services/travel';

export function* loadDashboardNonSequenced() {
  try {
    yield take('FETCH_USER_SUCCESS');

    const user = yield select(state => state.user);
    const departure = yield call(getDeparture, user);
    const [flight, forecast] = yield all([
      call(getFlight, departure.flightId),
      call(getForecast, departure.date)
    ]);

    yield put(
      {
        type: 'FETCH_DASHBOARD_NON_SEQUENCED_SUCCESS',
        payload: { forecast, flight, departure },
      },
    );
  } catch (err) {
    yield put({ type: 'FETCH_FAILED', payload: err })
  }
}


