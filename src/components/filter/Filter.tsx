import { ChangeEventHandler, Dispatch } from 'react';

import { StyledInput, StyledLabel } from '../styles/Input.styled';
import { StyledContainer } from '../styles/Container.styled';

type FilterProps = {
  setAmountFilter: Dispatch<React.SetStateAction<string>>;
};

function Filter({ setAmountFilter }: FilterProps) {
  const handleChange: ChangeEventHandler<HTMLInputElement> | undefined = (
    e
  ) => {
    setAmountFilter(e.target.value);
  };
  return (
    <StyledContainer size='large' align='start' gap='0'>
      <StyledLabel htmlFor='filter_amount'>Amount Filter</StyledLabel>
      <StyledInput
        onChange={handleChange}
        id='filter_amount'
        placeholder='Amount'
        type='text'
      />
    </StyledContainer>
  );
}

export default Filter;
