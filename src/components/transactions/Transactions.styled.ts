import styled from 'styled-components';
import { StyledContainer } from '../common/Container.styled';

export const StyledTransactions = styled(StyledContainer)`
  min-width: 15rem;
  @media (max-width: 850px) {
    gap: 0rem;
    justify-content: center;
  }
`;
