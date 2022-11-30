import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  border-radius: 48px;
  padding: 14px 24px;
  background: ${({ disabled }) => (disabled ? '#999' : '#d73035')};
  align-items: center;
  justify-content: center;
`;
