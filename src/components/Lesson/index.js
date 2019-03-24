import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View, Button, Picker, Text,
} from 'react-native';

import Logo from '../Logo';
import Indicator from '../Indicator';
import PianoKeyBoard from '../PianoKeyBoard';

import Gear from '../icons/Gear';
import PlayUp from '../icons/PlayUp';
import Play from '../icons/Play';
import Info from '../icons/Info';


import {
  LessonContainer,
  IntervalsContainer,
  ButtonWrapper,
  ButtonText,
  ButtonDesc,
  CompletedLessonContainer,
  HeaderContainer,
  PianoContainer,
  QuestionContainer,
  QuestionText,
  QuestionDesc,
  IntervalRow,
  OptionsContainer,
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
            {intervals.map(({ id, name, number }) => {
              let concatName = name[0];

              if (name[1]) {
                concatName = `${concatName} ${name[1][0]}.`;
              }

              return (
                <ButtonWrapper
                  key={id}
                  answer={this.getAnswer(id)}
                  onPress={() => this.handlePressInterval(id)}
                >
                  <ButtonText>{concatName}</ButtonText>
                  <ButtonDesc>{number}</ButtonDesc>
                </ButtonWrapper>
              );
            })}
          </IntervalRow>
        ))}
      </IntervalsContainer>
    );
  };

  onPressPlay = () => {
    if (!this.props.isPlaying) {
      this.props.playTune();
    }
  };

  renderOptions = () => {
    const {
      activeTune, isPlaying, getActiveTune,
    } = this.props;

    return (
      <OptionsContainer>
        <PlayUp />
        <Play isPlaying={isPlaying} onPress={this.onPressPlay} />
        <Info />
      </OptionsContainer>
    );
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
      <LessonContainer>
        {this.renderHeader()}
        {this.renderPiano()}
        {this.renderQuestion()}
        {this.renderIntervals()}
        {this.renderOptions()}
      </LessonContainer>
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
