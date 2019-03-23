import styled from 'styled-components';

const findIntervalButtonColor = (answer) => {
  if (answer === null) {
    return '#fff';
  }

  if (!answer) {
    return '#FF3B30';
  }

  return '#4CD964';
};

export const HeaderContainer = styled.View`
  margin-top: 40px;
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
  margin-top: 20px;
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
  background: #FFFFFF;
  border: 1px solid #CCCCCC;
  border-radius: 8px;
  padding: 15px;
`;

export const ButtonText = styled.Text`
  font-size: 17px;
  color: #000000;
  letter-spacing: -0.42px;
`;
