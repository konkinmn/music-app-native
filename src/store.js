import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import app from './services/app';
import tunes from './services/tunes';
import intervals from './services/intervals';
import lesson from './services/lesson';

const reducer = combineReducers({
  appService: app.reducer,
  tunesService: tunes.reducer,
  intervalsService: intervals.reducer,
  lessonService: lesson.reducer,
});

export default function configureStore(preloadedState = {}) {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];
  const toCompose = [applyMiddleware(...middlewares)];

  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    toCompose.push(window.__REDUX_DEVTOOLS_EXTENSION__());
  }

  const store = createStore(
    reducer,
    preloadedState,
    compose(...toCompose),
  );


  sagaMiddleware.run(app.sagas);
  sagaMiddleware.run(tunes.sagas);
  sagaMiddleware.run(intervals.sagas);
  sagaMiddleware.run(lesson.sagas);

  return store;
}
