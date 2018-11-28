import { call, put } from 'redux-saga/effects';
import { getUser } from '../services/travel';

export function* loadUser() {
  try {
    const user = yield call(getUser);
    yield put({ type: 'FETCH_USER_SUCCESS', payload: user });
  } catch(err) {
    yield put({ type: 'FETCH_FAILED', err });
  }
}
