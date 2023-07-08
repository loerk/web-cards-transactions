import styled from 'styled-components';

export const StyledInput = styled.input`
  font-size: 14px;
  padding: 10px 30px;
  margin-top: 10px;
  width: 100%;
  border: 0.1rem solid black;
  border-radius: 6px;
  &:focus {
    outline: none;
  }
`;

export const StyledLabel = styled.label`
  padding-left: 7px;
`;
