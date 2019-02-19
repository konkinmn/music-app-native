import { actionTypes } from './actions';

export const initialState = {
  showSettingsModal: false,
  loaded: false,
};

const handleAppLoaded = (state, action) => ({
  ...state,
  loaded: true,
});

const handleShowSettings = (state, action) => ({
  ...state,
  showSettingsModal: true,
});

const handleHideSettings = (state, action) => ({
  ...state,
  showSettingsModal: false,
});

export default (state = initialState, action) => {
  const handlers = {
    [actionTypes.SHOW_SETTINGS]: handleShowSettings,
    [actionTypes.HIDE_SETTINGS]: handleHideSettings,
    [actionTypes.APP_LOADED]: handleAppLoaded,
  };
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state;
};
