import { takeEvery, all, call, put } from 'redux-saga/effects';

import {
  getIntervalsData,
} from './data';

import {
  getIntervalsRequest,
  getIntervalsError,
  getIntervalsSuccess,
  actionTypes,
} from './actions';

function* getIntervalsSaga() {
  try {
    yield put(getIntervalsRequest());
    const tunes = yield call(getIntervalsData);
    yield put(getIntervalsSuccess(tunes));
  } catch (error) {
    yield put(getIntervalsError(error));
  }
}

function* sagas() {
  yield takeEvery(actionTypes.GET_INTERVALS, getIntervalsSaga);
}

export default function* root() {
  yield all([
    sagas(),
  ]);
}
