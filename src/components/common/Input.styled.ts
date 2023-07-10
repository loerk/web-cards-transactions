import styled from 'styled-components';

export const StyledInput = styled.input`
  font-size: 0.8rem;
  padding: 0.7rem 2.2rem;
  margin-top: 0.8rem;
  width: 100%;
  border: 0.1rem solid black;
  border-radius: 6px;
  &:focus {
    outline: none;
  }
`;

export const StyledLabel = styled.label`
  padding-left: 0.8rem;
  font-weight: bold;
  font-size: 0.82rem;
`;
