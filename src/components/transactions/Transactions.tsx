import { StyledContainer } from '../common/Container.styled';
import { StyledTransactions } from './Transactions.styled';
import { useTransactions } from '../../context/TransactionContext';
import { StyledIconButton } from '../common/Button.styled';
import Transaction from '../transaction/Transaction';
import Filter from '../filter/Filter';

function Transactions() {
  const { loadingState, transactions, sortMode, setSortMode, selectedCard } =
    useTransactions();

  const handleSortAsc = () => {
    setSortMode('asc');
  };
  const handleSortDesc = () => {
    setSortMode('desc');
  };
  const handleSortReset = () => {
    setSortMode(null);
  };

  if (loadingState.cards.error) {
    return;
  }
  if (loadingState.transactions.error) {
    return (
      <StyledContainer $align='center' $gap='2' size='medium'>
        <p>{loadingState.transactions.error}</p>
      </StyledContainer>
    );
  }
  if (!selectedCard.id) {
    return (
      <StyledContainer $align='center' $gap='2' size='medium'>
        <p>Please select a card</p>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer $align='center' size='medium'>
      <Filter />
      <StyledContainer
        style={{ paddingRight: '1rem', marginTop: '1rem' }}
        $align='end'
        size='large'
      >
        <StyledIconButton
          color={sortMode === 'asc' ? 'red' : 'black'}
          onClick={handleSortAsc}
        >
          ⬆
        </StyledIconButton>
        <StyledIconButton
          color={sortMode === 'desc' ? 'red' : 'black'}
          onClick={handleSortDesc}
        >
          ⬇
        </StyledIconButton>
        <StyledIconButton
          style={{ marginLeft: '.5rem' }}
          onClick={handleSortReset}
        >
          X
        </StyledIconButton>
      </StyledContainer>

      <StyledTransactions $gap='0' $align='center' size='large'>
        {transactions.map((transaction) => {
          const { id, amount, description } = transaction;
          return (
            <Transaction key={id} amount={amount} description={description} />
          );
        })}
      </StyledTransactions>
    </StyledContainer>
  );
}

export default Transactions;
