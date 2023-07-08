import styled from 'styled-components';
import { StyledContainer } from '../styles/Container.styled';
interface CardProps {
  variant: 'business' | 'private';
}

export const StyledTransactions = styled(StyledContainer)`
  @media (max-width: 850px) {
    gap: 0rem;
    justify-content: center;
  }
`;
