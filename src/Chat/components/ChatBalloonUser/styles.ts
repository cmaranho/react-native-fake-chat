import styled from 'styled-components/native';

export const Balloons = styled.View`
  align-items: flex-start;
  background-color: #f5f5f5;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 0;
  border-top-left-radius: 15px;
  border-top-right-radius: 25px;
  height: 70px;
  justify-content: center;
  padding: 13px;
  width: 65%;
`;

export const BallonContainer = styled.View`
  align-items: flex-end;
  flex-direction: row;
  justify-content: flex-end;
  margin: 15px 0;
  width: 100%;
`;

export const TextBallon = styled.Text`
  color: #808080;
  font-size: 16px;
`;
