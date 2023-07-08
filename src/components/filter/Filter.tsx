import { StyledInput, StyledLabel } from '../styles/Input.styled';
import { StyledContainer } from '../styles/Container.styled';
import { ChangeEventHandler, Dispatch } from 'react';

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
    <StyledContainer size='large' align='start'>
      <StyledLabel htmlFor='filter_amount'>Amount Filter </StyledLabel>
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
