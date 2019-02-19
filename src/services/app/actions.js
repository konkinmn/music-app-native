export const actionTypes = {
  INIT_APP: 'INIT_APP',
  APP_LOADED: 'APP_LOADED',
  SHOW_SETTINGS: 'SHOW_SETTINGS',
  HIDE_SETTINGS: 'HIDE_SETTINGS',
};

export const initApp = () => ({ type: actionTypes.INIT_APP });

export const appLoaded = () => ({ type: actionTypes.APP_LOADED });

export const showSettings = () => ({ type: actionTypes.SHOW_SETTINGS });

export const hideSettings = () => ({ type: actionTypes.HIDE_SETTINGS });
