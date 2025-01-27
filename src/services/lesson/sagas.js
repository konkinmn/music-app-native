import {
  takeEvery, all, take, put, select, call,
} from 'redux-saga/effects';
import shuffle from 'lodash.shuffle';

import {
  initLessonSuccess,
  getLessonTunes,
  getActiveTune,
  updateActiveTune,
  updateLessonTunes,
  updateSettings,
  setCorrectAnswer,
  setWrongAnswer,
  finishPlayTune,
  clearAnswers,
  setFinishLesson,
  clearFinishLesson,
  actionTypes,
} from './actions';

import lessonPlay from './lessonPlay';

const getTunes = (intervalsIds, length, tunes, lessonTunes) => {
  const shuffledIntervalsIds = shuffle(intervalsIds);
  shuffledIntervalsIds.forEach((id) => {
    const currentTunes = tunes[id];
    const tune = currentTunes[Math.floor(Math.random() * currentTunes.length)];
    lessonTunes.push(tune);
  });


  if (lessonTunes.length < length) {
    lessonTunes = getTunes(intervalsIds, length, tunes, lessonTunes);
  }

  return lessonTunes.splice(0, length);
};

function* initLessonSaga() {
  try {
    yield put(clearAnswers());
    yield put(clearFinishLesson());
    yield put(getLessonTunes());
    yield put(getActiveTune());

    yield take(actionTypes.UPDATE_ACTIVE_TUNE);
    yield put(initLessonSuccess());
  } catch (error) {
    console.log(error);
  }
}

function* getTunesSaga() {
  try {
    const { settings, length } = yield select(({ lessonService }) => lessonService);
    const tunes = yield select(({ tunesService }) => tunesService.tunes);
    const intervalsIds = settings.intervals.map(({ id }) => id);
    const lessonTunes = getTunes(intervalsIds, length, tunes, []);
    yield put(updateLessonTunes(lessonTunes));
  } catch (error) {
    console.log(error);
  }
}

function* getActiveTuneSaga() {
  try {
    const tunes = yield select(({ lessonService }) => lessonService.tunes);
    if (tunes.length) {
      const [activeTune, ...restTunes] = tunes;
      yield put(updateLessonTunes(restTunes));
      yield put(updateActiveTune(activeTune));
    } else {
      yield put(setFinishLesson());
    }
  } catch (error) {
    console.log(error);
  }
}

function* checkAnswerSaga({ intervalId }) {
  try {
    const activeTune = yield select(({ lessonService }) => lessonService.activeTune);
    if (activeTune.intervalId === intervalId) {
      yield put(setCorrectAnswer(intervalId));
    } else {
      yield put(setWrongAnswer(intervalId));
    }
  } catch (error) {
    console.log(error);
  }
}

function* playTuneSaga() {
  try {
    const activeTune = yield select(({ lessonService }) => lessonService.activeTune);
    const { playback } = yield select(({ lessonService }) => lessonService.settings);
    yield call(lessonPlay, activeTune.notes, playback);
    yield put(finishPlayTune());
  } catch (error) {
    console.log(error);
  }
}

function* sagas() {
  yield takeEvery(actionTypes.INIT_LESSON, initLessonSaga);
  yield takeEvery(actionTypes.GET_LESSON_TUNES, getTunesSaga);
  yield takeEvery(actionTypes.GET_ACTIVE_TUNE, getActiveTuneSaga);
  yield takeEvery(actionTypes.CHECK_ANSWER, checkAnswerSaga);
  yield takeEvery(actionTypes.PLAY_TUNE, playTuneSaga);
}

export default function* root() {
  yield all([
    sagas(),
  ]);
}
