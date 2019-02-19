import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {StyleSheet, View, Button} from 'react-native';

import {initApp} from './services/app/actions';

class App extends Component {
  static propTypes = {
    initApp: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.initApp();
  }

  play = async () => {
    const soundObject = new Expo.Audio.Sound();

    try {
      await soundObject.loadAsync(require('../assets/C1.mp3'));
      await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.play}
          title="Play"
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const mapDispatchToProps = {
  initApp,
};

export default connect(null, mapDispatchToProps)(App);
