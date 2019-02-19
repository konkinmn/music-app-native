import { takeEvery, all, call, put } from 'redux-saga/effects';

import {
  getTunesData,
} from './data';

import {
  getTunesRequest,
  getTunesError,
  getTunesSuccess,
  actionTypes,
} from './actions';

function* getTunesSaga() {
  try {
    yield put(getTunesRequest());
    const tunes = yield call(getTunesData);
    yield put(getTunesSuccess(tunes));
  } catch (error) {
    yield put(getTunesError(error));
  }
}

function* sagas() {
  yield takeEvery(actionTypes.GET_TUNES, getTunesSaga);
}

export default function* root() {
  yield all([
    sagas(),
  ]);
}
