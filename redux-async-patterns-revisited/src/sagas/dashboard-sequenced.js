import { take, call, put, select } from 'redux-saga/effects';
import { getDeparture, getFlight, getForecast } from '../services/travel';

export function* loadDashboardSequenced() {
  try {
    yield take('FETCH_USER_SUCCESS');

    const user = yield select(state => state.user);
    const departure = yield call(getDeparture, user);
    const flight = yield call(getFlight, departure.flightId);
    const forecast = yield call(getForecast, departure.date);

    yield put(
      {
        type: 'FETCH_DASHBOARD_SEQUENCED_SUCCESS',
        payload: { forecast, flight, departure },
      },
    );
  } catch (err) {
    yield put({ type: 'FETCH_FAILED', payload: err })
  }
}


