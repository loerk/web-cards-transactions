import styled from 'styled-components';

interface CardProps {
  $variant: 'business' | 'private';
  isTransaction?: boolean;
}

export const StyledCard = styled.button<CardProps>`
  min-width: 14rem;
  height: 8rem;
  padding-top: 0.3rem;
  padding-left: 2rem;
  font-size: 0.8rem;
  display: flex;
  align-items: start;
  text-align: start;
  align-items: start;
  border-radius: 1rem;
  border: none;
  color: ${({ theme }) => theme.colors.battleshipGray};
  background-color: ${({ $variant, theme }) =>
    $variant === 'business'
      ? theme.colors.columbiaBlue
      : theme.colors.antiflashWhite};
  &:hover {
    cursor: pointer;
  }
`;
