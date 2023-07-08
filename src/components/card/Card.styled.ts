import styled from 'styled-components';

interface CardProps {
  variant: 'business' | 'private';
  isTransaction?: boolean;
}

export const StyledCard = styled.button<CardProps>`
  border-radius: 15px;
  min-width: 250px;
  padding: 1rem;
  display: flex;
  align-items: start;
  height: 9rem;
  text-align: start;
  align-items: start;
  color: ${({ theme }) => theme.colors.battleshipGray};
  background-color: ${({ variant, theme }) =>
    variant === 'business'
      ? theme.colors.columbiaBlue
      : theme.colors.antiflashWhite};
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
