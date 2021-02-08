import styled from 'styled-components/native';

export const Balloons = styled.View`
  align-items: flex-start;
  background-color: ${({ theme }) => theme.color.balloon};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 15px;
  border-top-left-radius: 25px;
  border-top-right-radius: 15px;
  justify-content: center;
  min-height: 70px;
  padding: 13px;
  width: 65%;
`;

export const BallonContainer = styled.View`
  align-items: flex-end;
  flex-direction: row;
  margin: 15px 0;
  width: 100%;
`;

export const TextBallon = styled.Text`
  color: white;
  font-size: 16px;
`;
