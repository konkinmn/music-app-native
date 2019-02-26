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

export const IntervalsContainer = styled.View`
  margin-top: 100px;
`;

export const CompletedLessonContainer = styled.View`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.TouchableOpacity`
  width: 500px;
  height: 40px;
  padding: 5px;
  background-color: ${props => findIntervalButtonColor(props.answer)};
`;

export const ButtonText = styled.Text`
 
`;
