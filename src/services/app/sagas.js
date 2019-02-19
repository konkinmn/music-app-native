import {takeEvery, all, take, put} from 'redux-saga/effects';

import {
  appLoaded,
  actionTypes,
} from './actions';

import {
  getIntervals,
  actionTypes as tuneTypesActions,
} from '../intervals/actions';

import {
  getTunes,
  actionTypes as tunesActions,
} from '../tunes/actions';

import {
  initLesson,
  actionTypes as lessonActions,
} from '../lesson/actions';

function* initApp() {
  try {
    yield put(getIntervals());
    yield put(getTunes());

    yield all([
      take(tuneTypesActions.GET_INTERVALS_SUCCESS),
      take(tunesActions.GET_TUNES_SUCCESS),
    ]);

    yield put(initLesson());

    yield take(lessonActions.INIT_LESSON_SUCCESS);

    yield put(appLoaded());
  } catch (error) {
    console.error(error);
  }
}

function* sagas() {
  yield takeEvery(actionTypes.INIT_APP, initApp);
}

export default function* root() {
  yield all([
    sagas(),
  ]);
}
