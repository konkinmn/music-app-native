import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View, Button, Picker, Text,
} from 'react-native';

import Logo from '../Logo';
import Gear from '../Gear';
import Indicator from '../Indicator';
import PianoKeyBoard from '../PianoKeyBoard';

import {
  IntervalsContainer,
  ButtonWrapper,
  ButtonText,
  CompletedLessonContainer,
  HeaderContainer,
  PianoContainer,
  QuestionContainer,
  QuestionText,
  QuestionDesc,
  IntervalRow,
} from './styles';

import {
  checkAnswer, getActiveTune, playTune, updateSettings, initLesson,
} from '../../services/lesson/actions';
import { playbackTypes } from '../../services/lesson/constants';

const oddArrayReducer = (acc, item, i) => {
  if (!acc.length) {
    return [[item]];
  }

  if ((i + 1) % 2 === 0) {
    acc[acc.length - 1] = [...acc[acc.length - 1], item];
  } else {
    acc = [
      ...acc,
      [item],
    ];
  }

  return acc;
};

class App extends Component {
  static propTypes = {};

  getAnswer = (renderedIntervalId) => {
    const { answerId, intervalId } = this.props.activeTune;
    if (renderedIntervalId !== answerId) {
      return null;
    }

    return intervalId === answerId;
  };

  handlePressInterval = (id) => {
    const { answerId, intervalId } = this.props.activeTune;
    if (!answerId) {
      this.props.checkAnswer(id);
    }
  };

  renderIntervals = () => {
    const formattedIntervals = this.props.intervals.reduce(oddArrayReducer, []);

    return (
      <IntervalsContainer>
        {formattedIntervals.map((intervals, i) => (
          <IntervalRow key={i}>
            {intervals.map(({ id, name }) => {
              let concatName = name[0];

              if (name[1]) {
                concatName = `${concatName} ${name[1][0]}.`;
              }

              return (
                <ButtonWrapper
                  key={id}
                  answer={this.getAnswer(id)}
                  onPress={() => this.handlePressInterval(id)}
                  title={concatName}
                >
                  <ButtonText>{name}</ButtonText>
                </ButtonWrapper>
              );
            })}
          </IntervalRow>
        ))}
      </IntervalsContainer>
    );
  };

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

  renderHeader = () => (
    <HeaderContainer>
      <Gear />
      <Logo />
      <Indicator />
    </HeaderContainer>
  );

  renderPiano = () => (
    <PianoContainer>
      <PianoKeyBoard />
    </PianoContainer>
  );

  renderQuestion = () => (
    <QuestionContainer>
      <QuestionText>Определи интервал</QuestionText>
      <QuestionDesc>Прослушай и выбери правильный ответ</QuestionDesc>
    </QuestionContainer>
  );

  renderPicker = () => (
    <Picker
      selectedValue={this.props.playback}
      style={{ height: 50, width: '100%' }}
      onValueChange={itemValue => this.props.updateSettings({ playback: itemValue })}
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
          <Text>
Правильно:
            {answers.correct}
          </Text>
          <Text>
Не правильно:
            {answers.wrong}
          </Text>
          <Button onPress={initLesson} title="Еще раз" />
        </CompletedLessonContainer>
      );
    }

    return (
      <View>
        {this.renderHeader()}
        {this.renderPiano()}
        {this.renderQuestion()}
        {this.renderIntervals()}
        {/* {this.renderOptions()} */}
        {/* {this.renderPicker()} */}
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
