import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Lesson from './components/Lesson';

import { initApp } from './services/app/actions';

class App extends Component {
  static propTypes = {
    initApp: PropTypes.func.isRequired,
  };

  async componentDidMount() {
    this.props.initApp();
  }

  render() {
    if (!this.props.loaded) {
      return null;
    }
    return (
      <Lesson />
    );
  }
}

const mapStateToProps = ({ appService }) => ({
  loaded: appService.loaded,
});


const mapDispatchToProps = {
  initApp,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
