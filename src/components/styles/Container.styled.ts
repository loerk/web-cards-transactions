import styled from 'styled-components';

interface ContainerProps {
  size: 'small' | 'medium' | 'large';
  align: 'start' | 'center' | 'space-between';
  gap: string;
}

export const StyledContainer = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  gap: ${({ gap }) => gap}rem;
  flex-wrap: wrap;
  justify-content: ${({ align }) => align};
  align-items: center;
  ${({ size }) =>
    size === 'medium' &&
    `
  max-width: 60%;
  @media (max-width: 850px) {
    justify-content:center  }
`};
`;
