import { ChangeEventHandler, Dispatch } from 'react';

import { StyledInput, StyledLabel } from '../styles/Input.styled';
import { StyledContainer } from '../styles/Container.styled';
import { useTransactions } from '../../context/TransactionContext';

function Filter() {
  const { setFilter, filter } = useTransactions();

  const handleChange: ChangeEventHandler<HTMLInputElement> | undefined = (
    e
  ) => {
    setFilter(e.target.value);
  };
  return (
    <StyledContainer size='large' align='start' gap='0'>
      <StyledLabel htmlFor='filter_amount'>Amount Filter</StyledLabel>
      <StyledInput
        onChange={handleChange}
        id='filter_amount'
        placeholder='Amount'
        type='text'
        value={filter}
      />
    </StyledContainer>
  );
}

export default Filter;
