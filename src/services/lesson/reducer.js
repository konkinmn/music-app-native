import { actionTypes } from './actions';
import { playbackTypes } from './constants';

export const initialState = {
  activeTune: {},
  tunes: [],
  isPlaying: false,
  answers: {
    correct: 0,
    wrong: 0,
    correctWithTip: 0,
  },
  settings: {
    intervals: [],
    playback: playbackTypes.UP,
  },
  length: 10,
  finishLesson: false,
  showSettings: false,
  helpModal: null,
};

const handleUpdateSettings = (state, action) => ({
  ...state,
  settings: {
    ...state.settings,
    ...action.settings,
  },
});

const handleUpdateLessonTunes = (state, action) => ({
  ...state,
  tunes: action.tunes,
});

const handleUpdateActiveTune = (state, action) => ({
  ...state,
  activeTune: {
    ...action.activeTune,
    answerId: null,
  },
});

const handleSetCorrectAnswer = (state, action) => ({
  ...state,
  activeTune: {
    ...state.activeTune,
    answerId: action.answerId,
  },
  answers: {
    ...state.answers,
    correct: state.answers.correct + 1,
  },
});

const handleSetWrongAnswer = (state, action) => ({
  ...state,
  activeTune: {
    ...state.activeTune,
    answerId: action.answerId,
  },
  answers: {
    ...state.answers,
    wrong: state.answers.wrong + 1,
  },
});

const handleSetCorrectWithTipAnswer = (state, action) => ({
  ...state,
  activeTune: {
    ...state.activeTune,
    answerId: action.answerId,
  },
  answers: {
    ...state.answers,
    correctWithTip: state.answers.correctWithTip + 1,
  },
});

const handlePlayTune = (state, action) => ({
  ...state,
  isPlaying: true,
});

const handleFinishPlayTune = (state, action) => ({
  ...state,
  isPlaying: false,
  activeTune: {
    ...state.activeTune,
    secondPlay: true,
  },
});

const handleSetFinishLesson = (state, action) => ({
  ...state,
  finishLesson: true,
});

const handleClearFinishLesson = (state, action) => ({
  ...state,
  finishLesson: false,
});

const handleClearAnswer = (state, action) => ({
  ...state,
  answers: {
    ...initialState.answers,
  },
});

const handleShowSettings = (state, action) => ({
  ...state,
  showSettings: true,
});

const handleHideSettings = (state, action) => ({
  ...state,
  showSettings: false,
});

const handleChangeHelpModal = (state, action) => ({
  ...state,
  helpModal: action.helpModal,
});

export default (state = initialState, action) => {
  const handlers = {
    [actionTypes.UPDATE_SETTINGS]: handleUpdateSettings,
    [actionTypes.SET_CORRECT_ANSWER]: handleSetCorrectAnswer,
    [actionTypes.SET_WRONG_ANSWER]: handleSetWrongAnswer,
    [actionTypes.SET_CORRECT_WITH_TIP_ANSWER]: handleSetCorrectWithTipAnswer,
    [actionTypes.CLEAR_ANSWERS]: handleClearAnswer,
    [actionTypes.UPDATE_LESSON_TUNES]: handleUpdateLessonTunes,
    [actionTypes.PLAY_TUNE]: handlePlayTune,
    [actionTypes.FINISH_PLAY_TUNE]: handleFinishPlayTune,
    [actionTypes.UPDATE_ACTIVE_TUNE]: handleUpdateActiveTune,
    [actionTypes.SET_FINISH_LESSON]: handleSetFinishLesson,
    [actionTypes.CLEAR_FINISH_LESSON]: handleClearFinishLesson,
    [actionTypes.SHOW_SETTINGS]: handleShowSettings,
    [actionTypes.HIDE_SETTINGS]: handleHideSettings,
    [actionTypes.CHANGE_HELP_MODAL]: handleChangeHelpModal,
  };
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state;
};
