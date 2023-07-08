import styled from 'styled-components';
import { StyledCard } from '../card/Card.styled';
interface CardProps {
  variant: 'business' | 'private';
}

export const StyledTransaction = styled(StyledCard)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0rem;
  align-items: center;
  max-height: 5rem;
`;
