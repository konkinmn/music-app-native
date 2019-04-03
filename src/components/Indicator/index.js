import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';

import PercentageCircle from 'react-native-percentage-circle';

class Indicator extends Component {
  static propTypes = {
    defaultLength: PropTypes.number.isRequired,
    remainingTunesLength: PropTypes.number.isRequired,
  };

  render() {
    const { defaultLength, remainingTunesLength } = this.props;
    const answersCount = defaultLength - remainingTunesLength;
    const percent = answersCount * 100 / defaultLength;
    return <PercentageCircle radius={15} percent={percent} color="#000" bgcolor="#EDEDF2"><View /></PercentageCircle>;
  }
}

const mapStateToProps = ({ lessonService }) => ({
  defaultLength: lessonService.length,
  remainingTunesLength: lessonService.tunes.length,
});

export default connect(mapStateToProps)(Indicator);
