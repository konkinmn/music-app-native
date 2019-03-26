import styled from 'styled-components';

const findIntervalButtonColor = (answer) => {
  if (answer === null) {
    return '#fff';
  }

  if (!answer) {
    return '#ff3b30';
  }

  return '#01e677';
};

const findIntervalButtonBorderColor = (answer) => {
  if (answer === null) {
    return '#CCCCCC';
  }

  if (!answer) {
    return '#ff3b30';
  }

  return '#01e677';
};

export const LessonContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 15px;
`;

export const PianoContainer = styled.View`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const IntervalsContainer = styled.View`
  margin-top: 25px;
  padding: 0 10px;
  flex-grow: 1212;
`;

export const IntervalRow = styled.View`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const CompletedLessonContainer = styled.View`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuestionContainer = styled.View`
  margin-top: 10px;
`;

export const QuestionText = styled.Text`
  font-size: 21px;
  color: #000000;
  letter-spacing: 0;
  text-align: center;
  line-height: 34px;
`;

export const QuestionDesc = styled.Text`
  font-size: 14px;
  color: #ADADB3;
  letter-spacing: 0;
  text-align: center;
  line-height: 21px;
`;

export const ButtonWrapper = styled.TouchableOpacity`
  width: 49%;
  background: ${({ answer }) => `${findIntervalButtonColor(answer)}`};
  border: 1px solid ${({ answer }) => `${findIntervalButtonBorderColor(answer)}`};
  border-radius: 8px;
  height: 45px;
  padding: 0 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const IconsTouchWrapper = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 17px;
  color: ${({ answer }) => (answer === null ? '#000' : '#fff')};
  letter-spacing: -0.42px;
`;


export const ButtonDesc = styled.Text`
  font-size: 13px;
  color: ${({ answer }) => (answer === null ? '#ACACB3' : '#fff')};
  letter-spacing: -0.32px;
  text-align: right;
`;

export const OptionsContainer = styled.View`
  height: 50px;
  padding: 0 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LeftHandImage = styled.Image`
  margin-top: 10px;
  transform: translateX(103px);
  z-index: 1;
  ${({ active }) => active && 'transform: translateX(-20px);'}
`;

export const RightHandImage = styled.Image`
  margin-top: 10px;
  transform: translateX(-103px);
  z-index: 1;
  ${({ active }) => active && 'transform: translateX(20px);'}
`;

export const ButtonSuccessWrapper = styled.TouchableOpacity`
  padding: 16px 20px;
  background: #01E677;
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items: center;
  border-radius: 8px;
`;

export const ButtonSuccessText = styled.Text`
  font-size: 17px;
  font-weight: 500;
  color: #FFFFFF;
  text-align: center;
  line-height: 22px;
`;

export const SuccessText = styled.Text`
  font-weight: 600;
  font-size: 24px;
  color: #000000;
  letter-spacing: 0.29px;
  text-align: center;
  line-height: 34px;
  margin-bottom: 20px;
`;

export const SuccessDesc = styled.Text`
  font-size: 16px;
  color: #8E8E93;
  letter-spacing: -0.38px;
  text-align: center;
  line-height: 24px;
  margin-bottom: 30px;
  width: 290px;
`;
