import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { SafeAreaView } from 'react-native';

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
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <Lesson />
      </SafeAreaView>
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
