import React from 'react';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import App from './App';

import configureStore from './store';

const store = configureStore();

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

registerRootComponent(Root);
