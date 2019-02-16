import { takeEvery, all, call, put, select } from 'redux-saga/effects';

import {
  actionTypes,
} from './actions';

function* showSettings() {
  try {
    console.log(123);
  } catch (error) {
    console.error(error);
  }
}

function* testSaga() {
  yield takeEvery(actionTypes.SHOW_SETTINGS, showSettings);
}

export default function* root() {
  yield all([
    testSaga(),
  ]);
}
