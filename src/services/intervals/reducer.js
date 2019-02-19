import { actionTypes } from './actions';

export const initialState = {
  loading: false,
  error: null,
  intervals: [],
};

const handleGetTuneTypesRequest = (state, action) => ({
  ...state,
  loading: true,
  error: null,
});

const handleGetTuneTypesSuccess = (state, action) => ({
  ...state,
  loading: false,
  intervals: action.intervals,
  error: null,
});

const handleGetTuneTypesError = (state, action) => ({
  ...state,
  loading: false,
  error: action.error,
});

export default (state = initialState, action) => {
  const handlers = {
    [actionTypes.GET_INTERVALS_REQUEST]: handleGetTuneTypesRequest,
    [actionTypes.GET_INTERVALS_SUCCESS]: handleGetTuneTypesSuccess,
    [actionTypes.GET_INTERVALS_ERROR]: handleGetTuneTypesError,
  };
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state;
};
