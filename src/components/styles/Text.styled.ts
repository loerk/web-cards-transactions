import styled from 'styled-components';

interface TextProps {
  overflow?: 'ellipsis' | 'clip';
  width?: string;
}

export const StyledText = styled.p<TextProps>`
  @media (max-width: 850px) {
    max-width: ${({ width }) => (width ? width : '50%')};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ${({ overflow }) => overflow};
  }
`;
