import { takeEvery, all, call, put, select } from 'redux-saga/effects';
import shuffle from 'lodash.shuffle';

import {
  initLessonSuccess,
  getLessonTunes,
  getLessonTunesSuccess,
  updateSettings,
  actionTypes,
} from './actions';

function* initLessonSaga() {
  try {
    const intervals = yield select(({ intervalsService }) => intervalsService.intervals);
    const intervalsIds = intervals.map(({ id }) => id);
    yield put(updateSettings({ intervalsIds }));
    yield put(getLessonTunes());
    yield put(initLessonSuccess());
  } catch (error) {
    console.log(error);
  }
}

function* getTunesSaga() {
  try {
    const { settings, length } = yield select(({ lessonService }) => lessonService);
    const tunes = yield select(({ tunesService }) => tunesService.tunes);
    const shuffledIntervalsIds = shuffle(settings.intervalsIds);
    const lessonTunes = shuffledIntervalsIds.reduce((acc, id) => {
      if (length >= acc.length) {
        const currentTunes = tunes[id];
        const tune = currentTunes[Math.floor(Math.random() * currentTunes.length)];
        acc.push(tune);
      }

      return acc;
    }, []);
    yield put(getLessonTunesSuccess(lessonTunes));
  } catch (error) {
    console.log(error);
  }
}

function* sagas() {
  yield takeEvery(actionTypes.INIT_LESSON, initLessonSaga);
  yield takeEvery(actionTypes.GET_LESSON_TUNES, getTunesSaga);
}

export default function* root() {
  yield all([
    sagas(),
  ]);
}
