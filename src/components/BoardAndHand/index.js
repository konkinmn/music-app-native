import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Animated, Easing } from 'react-native';

import PianoKeyBoard from '../PianoKeyBoard';

import { LeftHandImage, PianoContainer, RightHandImage } from './styles';

class BoardAndHand extends Component {
  static propTypes = {};

  state = {
    leftHandAnim: new Animated.Value(103),
    rightHandAnim: new Animated.Value(-103),
  };

  animatedMove = (leftHand, rightHand) => {
    const config = {
      toValue: leftHand,
      duration: 400,
      easing: Easing.cubic,
      useNativeDriver: true,
    };

    Animated.timing(
      this.state.leftHandAnim,
      {
        ...config,
        toValue: leftHand,
      },
    ).start();
    Animated.timing(
      this.state.rightHandAnim,
      {
        ...config,
        toValue: rightHand,
      },
    ).start();
  };

  findAnimation = (answerId) => {
    if (answerId) {
      return this.animatedMove(-20, 20);
    }
    return this.animatedMove(103, -103);
  };

  componentDidUpdate() {
    const { answerId } = this.props.activeTune;
    this.findAnimation(answerId);
  }


  render() {
    const { leftHandAnim, rightHandAnim } = this.state;
    const { answerId, notes } = this.props.activeTune;
    let currentNotes = [];

    if (answerId) {
      currentNotes = notes;
    }

    return (
      <PianoContainer>
        <Animated.View style={{
          zIndex: 1,
          transform: [{
            translateX: leftHandAnim,
          }],
        }}
        >
          <LeftHandImage
            active={!!answerId}
            source={require('../../../assets/images/left-hand.png')}
          />
        </Animated.View>
        <PianoKeyBoard notes={currentNotes} />
        <Animated.View style={{
          zIndex: 1,
          transform: [{
            translateX: rightHandAnim,
          }],
        }}
        >
          <RightHandImage
            active={!!answerId}
            source={require('../../../assets/images/right-hand.png')}
          />
        </Animated.View>
      </PianoContainer>
    );
  }
}

const mapStateToProps = ({ lessonService }) => ({
  activeTune: lessonService.activeTune,
});

export default connect(mapStateToProps)(BoardAndHand);
