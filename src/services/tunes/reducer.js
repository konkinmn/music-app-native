import { actionTypes } from './actions';

export const initialState = {
  loading: false,
  error: null,
  tunes: [],
};

const handleGetTunesRequest = (state, action) => ({
  ...state,
  loading: true,
  error: null,
});

const handleGetTunesSuccess = (state, action) => ({
  ...state,
  loading: false,
  tunes: action.tunes,
  error: null,
});

const handleGetTunesError = (state, action) => ({
  ...state,
  loading: false,
  error: action.error,
});

export default (state = initialState, action) => {
  const handlers = {
    [actionTypes.GET_TUNES_REQUEST]: handleGetTunesRequest,
    [actionTypes.GET_TUNES_SUCCESS]: handleGetTunesSuccess,
    [actionTypes.GET_TUNES_ERROR]: handleGetTunesError,
  };
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state;
};
