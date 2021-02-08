import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.color.background};
  flex: 1;
  height: 100%;
  justify-content: flex-start;
  width: 100%;
`;
