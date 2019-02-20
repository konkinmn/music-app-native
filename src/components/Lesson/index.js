import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Button } from 'react-native';

import { IntervalsContainer, ButtonWrapper, ButtonText } from './styles';

import { checkAnswer, getActiveTune, playTune } from '../../services/lesson/actions';


class App extends Component {
  static propTypes = {};

  getAnswer = (renderedIntervalId) => {
    const { answerId, intervalId } = this.props.activeTune;
    if (renderedIntervalId !== answerId) {
      return null;
    }

    return intervalId === answerId;
  };

  renderInterval = ({ id, name }) => (
    <ButtonWrapper
      answer={this.getAnswer(id)}
      onPress={() => this.props.checkAnswer(id)}
      title={name}
    >
      <ButtonText>{name}</ButtonText>
    </ButtonWrapper>
  );

  renderOptions = () => {
    const {
      activeTune, isPlaying, playTune, getActiveTune,
    } = this.props;

    if (isPlaying) {
      return null;
    }

    if (activeTune.answerId === null) {
      return <Button onPress={playTune} title="Play" />;
    }

    return <Button onPress={getActiveTune} title="Next" />;
  };

  render() {
    const { intervals } = this.props;
    return (
      <View>
        <IntervalsContainer>
          {intervals.map(this.renderInterval)}
        </IntervalsContainer>
        {this.renderOptions()}
      </View>
    );
  }
}

const mapStateToProps = ({ lessonService }) => ({
  activeTune: lessonService.activeTune,
  intervals: lessonService.settings.intervals,
  isPlaying: lessonService.isPlaying,
});


const mapDispatchToProps = {
  checkAnswer,
  getActiveTune,
  playTune,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
