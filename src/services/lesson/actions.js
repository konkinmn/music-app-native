export const actionTypes = {
  UPDATE_SETTINGS: 'UPDATE_SETTINGS',
  SET_CORRECT_ANSWER: 'SET_CORRECT_ANSWER',
  SET_WRONG_ANSWER: 'SET_WRONG_ANSWER',
  SET_CORRECT_WITH_TIP_ANSWER: 'SET_CORRECT_WITH_TIP_ANSWER',
  INIT_LESSON: 'INIT_LESSON',
  INIT_LESSON_SUCCESS: 'INIT_LESSON_SUCCESS',
  GET_LESSON_TUNES: 'GET_LESSON_TUNES',
  UPDATE_LESSON_TUNES: 'UPDATE_LESSON_TUNES',
  GET_ACTIVE_TUNE: 'GET_ACTIVE_TUNE',
  UPDATE_ACTIVE_TUNE: 'UPDATE_ACTIVE_TUNE',
  CHECK_ANSWER: 'CHECK_ANSWER',
  PLAY_TUNE: 'PLAY_TUNE',
  FINISH_PLAY_TUNE: 'FINISH_PLAY_TUNE',
};

export const initLesson = () => ({ type: actionTypes.INIT_LESSON });

export const initLessonSuccess = () => ({ type: actionTypes.INIT_LESSON_SUCCESS });

export const getLessonTunes = () => ({ type: actionTypes.GET_LESSON_TUNES });

export const updateLessonTunes = tunes =>
  ({ type: actionTypes.UPDATE_LESSON_TUNES, tunes });

export const getActiveTune = () => ({ type: actionTypes.GET_ACTIVE_TUNE });

export const updateActiveTune = activeTune =>
  ({ type: actionTypes.UPDATE_ACTIVE_TUNE, activeTune });

export const playTune = () => ({ type: actionTypes.PLAY_TUNE });

export const finishPlayTune = () => ({ type: actionTypes.FINISH_PLAY_TUNE });

export const updateSettings = settings => ({ type: actionTypes.UPDATE_SETTINGS, settings });

export const checkAnswer = intervalId => ({ type: actionTypes.CHECK_ANSWER, intervalId });

export const setCorrectAnswer = answerId => ({ type: actionTypes.SET_CORRECT_ANSWER, answerId });

export const setWrongAnswer = answerId => ({ type: actionTypes.SET_WRONG_ANSWER, answerId });

export const setCorrectWithTipAnswer = answerId => ({ type: actionTypes.SET_CORRECT_WITH_TIP_ANSWER, answerId });

