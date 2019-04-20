import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch } from 'react-native';

import Logo from '../Logo';
import Indicator from '../Indicator';

import BoardAndHand from '../BoardAndHand';
import HelpModal from '../HelpModal';

import Gear from '../icons/Gear';
import PlayUp from '../icons/PlayUp';
import Play from '../icons/Play';
import Tip from '../icons/Tip';
import ArrowForward from '../icons/ArrowForward';
import Repeat from '../icons/Repeat';
import LeftArrow from '../icons/LeftArrow';

import {
  LessonContainer,
  IntervalsContainer,
  ButtonWrapper,
  ButtonText,
  ButtonDesc,
  CompletedLessonContainer,
  HeaderContainer,
  QuestionContainer,
  QuestionText,
  QuestionDesc,
  IntervalRow,
  OptionsContainer,
  IconsTouchWrapper,
  ButtonSuccessWrapper,
  ButtonSuccessText,
  SuccessText,
  SuccessDesc,
  SettingsContainer,
  IntervalSettingsContainer,
  IntervalSettingsText,
} from './styles';

import {
  checkAnswer,
  getActiveTune,
  playTune,
  setHideSettings,
  initLesson,
  setShowSettings,
  updateSettings,
  changeHelpModal,
} from '../../services/lesson/actions';

import { helpModalTypes } from '../../services/lesson/constants';

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

class Lesson extends Component {
  static propTypes = {};

  getAnswer = (renderedIntervalId) => {
    const { answerId, intervalId } = this.props.activeTune;
    if (renderedIntervalId !== answerId) {
      return null;
    }

    return intervalId === answerId;
  };

  handlePressInterval = (id) => {
    const { answerId, secondPlay } = this.props.activeTune;
    if (secondPlay && !answerId) {
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
              const answer = this.getAnswer(id);

              if (name[1]) {
                concatName = `${concatName} ${name[1][0]}.`;
              }

              return (
                <ButtonWrapper
                  key={id}
                  answer={answer}
                  onPress={() => this.handlePressInterval(id)}
                >
                  <ButtonText answer={answer}>{concatName}</ButtonText>
                  <ButtonDesc answer={answer}>{number}</ButtonDesc>
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

  renderMainIcon = () => {
    const {
      activeTune, isPlaying, getActiveTune,
    } = this.props;

    if (activeTune.answerId) {
      return (
        <IconsTouchWrapper onPress={getActiveTune}>
          <ArrowForward />
        </IconsTouchWrapper>
      );
    }

    if (activeTune.secondPlay) {
      return (
        <IconsTouchWrapper onPress={this.onPressPlay}>
          <Repeat isPlaying={isPlaying} />
        </IconsTouchWrapper>
      );
    }

    return (
      <IconsTouchWrapper onPress={this.onPressPlay}>
        <Play isPlaying={isPlaying} />
      </IconsTouchWrapper>
    );
  };


  renderOptions = () => (
    <OptionsContainer>
      <PlayUp />
      {this.renderMainIcon()}
      <IconsTouchWrapper onPress={() => this.props.changeHelpModal(helpModalTypes.TIP)}>
        <Tip />
      </IconsTouchWrapper>
    </OptionsContainer>
  );

  renderHeader = () => (
    <HeaderContainer>
      <IconsTouchWrapper size={30} onPress={this.props.setShowSettings}>
        <Gear />
      </IconsTouchWrapper>
      <Logo />
      <Indicator />
    </HeaderContainer>
  );

  renderQuestion = () => {
    const { answerId, intervalId } = this.props.activeTune;

    if (!answerId) {
      return (
        <QuestionContainer>
          <QuestionText>Определи интервал</QuestionText>
          <QuestionDesc>Прослушай и выбери правильный ответ</QuestionDesc>
        </QuestionContainer>
      );
    }

    const { name } = this.props.intervals.find(({ id }) => id === intervalId);
    let secondPart = '';

    if (name[1]) {
      secondPart = `${name[1]} `;
    }

    const intervalName = `${secondPart}${name[0].toLowerCase()}`;

    if (intervalId !== answerId) {
      return (
        <QuestionContainer>
          <QuestionText>{`Нет, это ${intervalName}!`}</QuestionText>
          <QuestionDesc
            onPress={() => this.props.changeHelpModal(helpModalTypes.HOW_TO_REMEMBER)}
          >
            Как запомнить?
          </QuestionDesc>
        </QuestionContainer>
      );
    }

    return (
      <QuestionContainer>
        <QuestionText>{`Да, это ${intervalName}!`}</QuestionText>
        <QuestionDesc>Попробуем еще?</QuestionDesc>
      </QuestionContainer>
    );
  };

  renderFinishedLesson = initLesson => (
    <CompletedLessonContainer>
      <SuccessText>Ура! Урок пройден!</SuccessText>
      <SuccessDesc>
        Поздравляем! Вы сделали шаг на пути
        к идеальному слуху!
      </SuccessDesc>
      <ButtonSuccessWrapper onPress={initLesson}>
        <ButtonSuccessText>Тренироваться дальше</ButtonSuccessText>
      </ButtonSuccessWrapper>
    </CompletedLessonContainer>
  );

  renderIntervalsList = () => this.props.intervalsList.map(interval => (
    <IntervalSettingsContainer key={interval.id}>
      <IntervalSettingsText>{`${interval.name[0]} ${interval.name[1] ? interval.name[1] : ''}`}</IntervalSettingsText>
      <Switch
        onValueChange={value => this.changeSettings(interval, value)}
        value={this.getSettingsValue(interval.id)}
      />
    </IntervalSettingsContainer>
  ));

  getSettingsValue = id => this.props.intervals.some(interval => interval.id === id);

  reInitLesson = false;

  changeSettings = (interval, value) => {
    let newIntervals = [];

    if (!value) {
      if (this.props.intervals.length === 2) {
        return;
      }

      newIntervals = this.props.intervals.filter(({ id }) => id !== interval.id);
    } else {
      newIntervals = [
        ...this.props.intervals,
        interval,
      ];
    }

    this.reInitLesson = true;
    newIntervals.sort((a, b) => a.id - b.id);
    this.props.updateSettings({ intervals: newIntervals });
  };

  returnToLesson = () => {
    if (this.reInitLesson) {
      this.props.initLesson();
      this.reInitLesson = false;
    }
    this.props.setHideSettings();
  };

  renderSettings = () => (
    <SettingsContainer>
      <IconsTouchWrapper size={30} onPress={this.returnToLesson}>
        <LeftArrow />
      </IconsTouchWrapper>
      {this.renderIntervalsList()}
    </SettingsContainer>
  );

  render() {
    const {
      finishLesson, initLesson, showSettings,
    } = this.props;

    if (showSettings) {
      return this.renderSettings();
    }

    if (finishLesson) {
      return this.renderFinishedLesson(initLesson);
    }

    return (
      <LessonContainer>
        {this.renderHeader()}
        <BoardAndHand />
        {this.renderQuestion()}
        {this.renderIntervals()}
        {this.renderOptions()}
        <HelpModal />
      </LessonContainer>
    );
  }
}

const mapStateToProps = ({ lessonService, intervalsService }) => ({
  activeTune: lessonService.activeTune,
  intervals: lessonService.settings.intervals,
  answers: lessonService.answers,
  isPlaying: lessonService.isPlaying,
  finishLesson: lessonService.finishLesson,
  playback: lessonService.settings.playback,
  showSettings: lessonService.showSettings,
  intervalsList: intervalsService.intervals,
});

const mapDispatchToProps = {
  checkAnswer,
  getActiveTune,
  playTune,
  setShowSettings,
  setHideSettings,
  initLesson,
  updateSettings,
  changeHelpModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Lesson);
