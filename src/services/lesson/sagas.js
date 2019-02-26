import { takeEvery, all, take, put, select, call } from 'redux-saga/effects';
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
  actionTypes,
} from './actions';

const sounds = {
  c1: require('../../../assets/tunes/C1.mp3'),
  e1: require('../../../assets/tunes/E1.mp3'),
};

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const play = notes => new Promise(async (resolve) => {
  console.log(123);
  await timeout(2000);
  console.log(456);
  // const soundObjectA = new Expo.Audio.Sound();
  // const soundObjectB = new Expo.Audio.Sound();
  // let counter = 0;
  //
  // soundObjectB.setOnPlaybackStatusUpdate(({ shouldPlay, isPlaying }) => {
  //   const isFinish = !(shouldPlay || isPlaying);
  //
  //   if (isFinish) {
  //     if (counter === 2) {
  //       // soundObjectA.unloadAsync();
  //       return resolve();
  //     }
  //
  //     return counter++;
  //   }
  // });
  //
  try {
  //   await soundObjectA.loadAsync(sounds[notes[0]]);
  //   await soundObjectB.loadAsync(sounds[notes[1]]);
  //   await soundObjectA.playAsync();
  //   await timeout(200000);
  //   await soundObjectB.playAsync();
  } catch (error) {
    console.log(error);
  }
});

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

  return lessonTunes;
};

function* initLessonSaga() {
  try {
    const intervals = yield select(({ intervalsService }) => intervalsService.intervals);
    yield put(updateSettings({ intervals }));
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
    yield call(play, activeTune.notes);
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
