export const actionTypes = {
  SHOW_SETTINGS: 'SHOW_SETTINGS',
  HIDE_SETTINGS: 'HIDE_SETTINGS',
};

export const showSettings = () => ({ type: actionTypes.SHOW_SETTINGS });

export const hideSettings = () => ({ type: actionTypes.HIDE_SETTINGS });
