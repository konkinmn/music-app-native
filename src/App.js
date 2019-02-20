import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Lesson from './components/Lesson';

import { initApp } from './services/app/actions';

class App extends Component {
  static propTypes = {
    initApp: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.initApp();
  }

  render() {
    return (
      <Lesson />
    );
  }
}
const mapDispatchToProps = {
  initApp,
};

export default connect(null, mapDispatchToProps)(App);
