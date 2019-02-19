export const actionTypes = {
  GET_TUNES: 'GET_TUNES',
  GET_TUNES_REQUEST: 'GET_TUNES_REQUEST',
  GET_TUNES_SUCCESS: 'GET_TUNES_SUCCESS',
  GET_TUNES_ERROR: 'GET_TUNES_ERROR',
};

export const getTunes = () => ({ type: actionTypes.GET_TUNES });

export const getTunesRequest = () => ({ type: actionTypes.GET_TUNES_REQUEST });

export const getTunesSuccess = tunes => ({ type: actionTypes.GET_TUNES_SUCCESS, tunes });

export const getTunesError = error => ({ type: actionTypes.GET_TUNES_ERROR, error });
