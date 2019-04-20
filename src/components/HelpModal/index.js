import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';

import Checked from '../icons/Checked';

import { Title, Description, BottomContainer } from './styles';

import {
  changeHelpModal,
} from '../../services/lesson/actions';

import {
  helpModalTypes,
} from '../../services/lesson/constants';

const titles = {
  [helpModalTypes.HOW_TO_REMEMBER]: 'Как запомнить?',
  [helpModalTypes.TIP]: 'Подсказка',
};

const findDescription = (intervalId, intervalsList, helpModal) => {
  const interval = intervalsList.find(({ id }) => id === intervalId);
  return interval[helpModal];
};

const HelpModal = ({
  helpModal, changeHelpModal, intervalId, intervalsList,
}) => (
  <Modal
    onBackdropPress={() => changeHelpModal(null)}
    backdropOpacity={0.4}
    isVisible={!!helpModal}
    style={{
      justifyContent: 'flex-end',
      margin: 0,
    }}
  >
    <BottomContainer>
      <Title>{titles[helpModal]}</Title>
      <Description>{findDescription(intervalId, intervalsList, helpModal)}</Description>
      <Checked />
    </BottomContainer>
  </Modal>
);

const mapStateToProps = ({ lessonService, intervalsService }) => ({
  helpModal: lessonService.helpModal,
  intervalId: lessonService.activeTune.intervalId,
  intervalsList: intervalsService.intervals,
});

const mapDispatchToProps = {
  changeHelpModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(HelpModal);
