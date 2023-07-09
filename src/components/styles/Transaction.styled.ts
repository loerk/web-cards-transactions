import styled from 'styled-components';
import { StyledCard } from './Card.styled';

export const StyledTransaction = styled(StyledCard)`
  width: 100%;
  display: flex;
  margin: 0.5rem 0rem;
  gap: 1rem;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
  max-height: 4.5rem;
  border-radius: 0.5rem;
`;
