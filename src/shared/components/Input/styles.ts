import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.color.card};
  border-radius: 40px;
  bottom: 24px;
  box-shadow: 3px 1px 3px rgba(0, 0, 0, 0.2);
  flex-direction: row;
  height: 60px;
  justify-content: space-between;
  padding: 10px;
  position: absolute;
  width: 95%;
  z-index: 2;
`;

export const TextArea = styled.View`
  margin-left: 19px;
  width: 83%;
`;

export const AcceptButton = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 50px;
  height: 50px;
  justify-content: center;
  width: 50px;
`;
