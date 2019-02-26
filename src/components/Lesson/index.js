import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Button, Picker, Text } from 'react-native';

import {
  IntervalsContainer,
  ButtonWrapper,
  ButtonText,
  CompletedLessonContainer,
} from './styles';

import { checkAnswer, getActiveTune, playTune, updateSettings, initLesson } from '../../services/lesson/actions';
import { playbackTypes } from '../../services/lesson/constants';


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
      key={id}
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

  renderPicker = () => (
    <Picker
      selectedValue={this.props.playback}
      style={{ height: 50, width: '100%' }}
      onValueChange={(itemValue, itemIndex) => this.props.updateSettings({ playback: itemValue })}
    >
      <Picker.Item value={playbackTypes.UP} label="Вверх" />
      <Picker.Item value={playbackTypes.DOWN} label="Вниз" />
    </Picker>
  );

  render() {
    const {
      intervals, finishLesson, answers, initLesson,
    } = this.props;

    if (finishLesson) {
      return (
        <CompletedLessonContainer>
          <Text>Правильно: {answers.correct}</Text>
          <Text>Не правильно: {answers.wrong}</Text>
          <Button onPress={initLesson} title="Еще раз" />
        </CompletedLessonContainer>
      );
    }

    return (
      <View>
        <IntervalsContainer>
          {intervals.map(this.renderInterval)}
        </IntervalsContainer>
        {this.renderOptions()}
        {this.renderPicker()}
      </View>
    );
  }
}

const mapStateToProps = ({ lessonService }) => ({
  activeTune: lessonService.activeTune,
  intervals: lessonService.settings.intervals,
  answers: lessonService.answers,
  isPlaying: lessonService.isPlaying,
  finishLesson: lessonService.finishLesson,
  playback: lessonService.settings.playback,
});

const mapDispatchToProps = {
  checkAnswer,
  getActiveTune,
  playTune,
  updateSettings,
  initLesson,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
