import styled from 'styled-components';

interface ContainerProps {
  size: 'small' | 'medium' | 'large';
  align: 'start' | 'center';
}

export const StyledContainer = styled.div<ContainerProps>`
  width: 100%;
  margin: 1rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ align }) =>
    align === 'start' ? 'start' : 'space-between'};
  align-items: center;
  ${({ size }) =>
    size === 'medium' &&
    `
  max-width: 60%;
  @media (max-width: 850px) {
    gap:2rem;
    justify-content:center
  }
`};
`;
