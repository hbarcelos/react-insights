import { take, call, put, select, takeLatest, all, fork } from 'redux-saga/effects';
import { getDeparture, getFlight, getForecast } from '../services/travel';

export function* isolatedFlight({ payload: departure }) {
  try {
    // const departure = yield take('FETCH_DEPARTURE_SUCCESS');
    const flight = yield call(getFlight, departure.flightId);

    yield put({
      type: 'FETCH_DASHBOARD_NON_SEQUENCED_NON_BLOCKING_SUCCESS',
      payload: { flight }
    });
  } catch(err) {
    yield put({ type: 'FETCH_FAILED', payload: err });
  }
}

export function* isolatedForecast({ payload: departure }) {
  try {
    // const departure = yield take('FETCH_DEPARTURE_SUCCESS');
    const forecast = yield call(getForecast, departure.date);

    yield put({
      type: 'FETCH_DASHBOARD_NON_SEQUENCED_NON_BLOCKING_SUCCESS',
      payload: { forecast }
    });
  } catch(err) {
    yield put({ type: 'FETCH_FAILED', payload: err });
  }
}

export function* loadDashboardNonSequencedNonBlocking() {
  try {
    yield take('FETCH_USER_SUCCESS');

    const user = yield select(state => state.user);
    const departure = yield call(getDeparture, user);

    yield put(
      {
        type: 'FETCH_DASHBOARD_NON_SEQUENCED_NON_BLOCKING_SUCCESS',
        payload: { departure },
      },
    );

    yield put({ type: 'FETCH_DEPARTURE_SUCCESS', payload: departure })
  } catch (err) {
    yield put({ type: 'FETCH_FAILED', payload: err })
  }
}

function* watchDepartureSuccess() {
  yield takeLatest('FETCH_DEPARTURE_SUCCESS', isolatedFlight);
  yield takeLatest('FETCH_DEPARTURE_SUCCESS', isolatedForecast);
}

function* watchLoadDashboardNonSeuqncedNonBlocking() {
  yield takeLatest(
    'LOAD_DASHBOARD_NON_SEQUENCED_NON_BLOCKING',
    loadDashboardNonSequencedNonBlocking
  );
}

export default all([
  fork(watchDepartureSuccess),
  fork(watchLoadDashboardNonSeuqncedNonBlocking),
])
