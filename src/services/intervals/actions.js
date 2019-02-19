export const actionTypes = {
  GET_INTERVALS: 'GET_INTERVALS',
  GET_INTERVALS_REQUEST: 'GET_INTERVALS_REQUEST',
  GET_INTERVALS_SUCCESS: 'GET_INTERVALS_SUCCESS',
  GET_INTERVALS_ERROR: 'GET_INTERVALS_ERROR',
};

export const getIntervals = () => ({ type: actionTypes.GET_INTERVALS });

export const getIntervalsRequest = () => ({ type: actionTypes.GET_INTERVALS_REQUEST });

export const getIntervalsSuccess = intervals =>
  ({ type: actionTypes.GET_INTERVALS_SUCCESS, intervals });

export const getIntervalsError = error => ({ type: actionTypes.GET_INTERVALS_ERROR, error });
