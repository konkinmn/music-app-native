export const actionTypes = {
  INCREMENT_COUNTER: 'INCREMENT_COUNTER',
  UPDATE_SETTINGS: 'UPDATE_SETTINGS',
  SET_CORRECT_ANSWER: 'SET_CORRECT_ANSWER',
  SET_WRONG_ANSWER: 'SET_WRONG_ANSWER',
  SET_CORRECT_WITH_TIP_ANSWER: 'SET_CORRECT_WITH_TIP_ANSWER',
  INIT_LESSON: 'INIT_LESSON',
  INIT_LESSON_SUCCESS: 'INIT_LESSON_SUCCESS',
  GET_LESSON_TUNES: 'GET_LESSON_TUNES',
  GET_LESSON_TUNES_SUCCESS: 'GET_LESSON_TUNES_SUCCESS',
};

export const initLesson = () => ({ type: actionTypes.INIT_LESSON });

export const initLessonSuccess = () => ({ type: actionTypes.INIT_LESSON_SUCCESS });

export const getLessonTunes = () => ({ type: actionTypes.GET_LESSON_TUNES });

export const getLessonTunesSuccess = tunes =>
  ({ type: actionTypes.GET_LESSON_TUNES_SUCCESS, tunes });

export const incrementCounter = () => ({ type: actionTypes.INCREMENT_COUNTER });

export const updateSettings = settings => ({ type: actionTypes.UPDATE_SETTINGS, settings });

export const setCorrectAnswer = () => ({ type: actionTypes.SET_CORRECT_ANSWER });

export const setWrongAnswer = () => ({ type: actionTypes.SET_WRONG_ANSWER });

export const setCorrectWithTipAnswer = () => ({ type: actionTypes.SET_CORRECT_WITH_TIP_ANSWER });

