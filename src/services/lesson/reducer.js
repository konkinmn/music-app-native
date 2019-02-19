import { actionTypes } from './actions';

export const initialState = {
  activeTune: {},
  tunes: [],
  answers: {
    correct: 0,
    wrong: 0,
    correctWithTip: 0,
  },
  settings: {
    intervalsIds: [],
    playback: 'Up',
  },
  counter: 0,
  length: 10,
};

const handleIncrementCounter = (state, action) => ({
  ...state,
  counter: state.counter + 1,
});

const handleUpdateSettings = (state, action) => ({
  ...state,
  settings: {
    ...state.settings,
    ...action.settings,
  },
});

const handleSetCorrectAnswer = (state, action) => ({
  ...state,
  answers: {
    ...state.answers,
    correct: state.correct + 1,
  },
});

const handleSetWrongAnswer = (state, action) => ({
  ...state,
  answers: {
    ...state.answers,
    wrong: state.wrong + 1,
  },
});

const handleSetCorrectWithTipAnswer = (state, action) => ({
  ...state,
  answers: {
    ...state.answers,
    correctWithTip: state.correctWithTip + 1,
  },
});

const handleGetLessonTunesSuccess = (state, action) => ({
  ...state,
  tunes: action.tunes,
});

export default (state = initialState, action) => {
  const handlers = {
    [actionTypes.INCREMENT_COUNTER]: handleIncrementCounter,
    [actionTypes.UPDATE_SETTINGS]: handleUpdateSettings,
    [actionTypes.SET_CORRECT_ANSWER]: handleSetCorrectAnswer,
    [actionTypes.SET_WRONG_ANSWER]: handleSetWrongAnswer,
    [actionTypes.SET_CORRECT_WITH_TIP_ANSWER]: handleSetCorrectWithTipAnswer,
    [actionTypes.GET_LESSON_TUNES_SUCCESS]: handleGetLessonTunesSuccess,
  };
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state;
};
