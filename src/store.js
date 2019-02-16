import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import app from './services/app';

const reducer = combineReducers({
  appService: app.reducer,
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

  return store;
}
