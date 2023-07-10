import { ChangeEventHandler } from 'react';

import { StyledInput, StyledLabel } from '../common/Input.styled';
import { StyledContainer } from '../common/Container.styled';
import { useTransactions } from '../../context/TransactionContext';

function Filter() {
  const { setFilter, filter } = useTransactions();

  const handleChange: ChangeEventHandler<HTMLInputElement> | undefined = (
    e
  ) => {
    setFilter(e.target.value);
  };

  return (
    <StyledContainer size='large' $align='start' $gap='0'>
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
