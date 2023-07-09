import { useEffect, useState } from 'react';

import { StyledContainer } from '../styles/Container.styled';
import { StyledTransactions } from '../styles/Transactions.styled';
import { useTransactions } from '../../context/TransactionContext';
import Transaction from '../transaction/Transaction';
import Filter from '../filter/Filter';
import { StyledIconButton } from '../styles/Button.styled';
import { ITransaction } from '../../ApiClient';

function Transactions() {
  const { transactions, selectedCard, sortTransactions, filter } =
    useTransactions();
  const [filteredTransactions, setFilteredTransactions] =
    useState<ITransaction[]>(transactions);

  const handleSortUp = () => {
    sortTransactions('increasing');
  };
  const handleSortDown = () => {
    sortTransactions('decreasing');
  };

  useEffect(() => {
    if (filter) {
      const updatedTransactions = transactions.filter(
        (transaction) => transaction.amount >= Number(filter.replace(',', '.'))
      );
      setFilteredTransactions(updatedTransactions);
    } else {
      setFilteredTransactions(transactions);
    }
  }, [filter]);

  if (!selectedCard.id) {
    return (
      <StyledContainer align='center' gap='2' size='medium'>
        <p>Please select a card</p>
      </StyledContainer>
    );
  }

  const displayedTransactions = filter ? filteredTransactions : transactions;

  return (
    <StyledContainer align='center' size='medium'>
      <Filter />
      <StyledContainer
        style={{ paddingRight: '1rem', marginTop: '1rem' }}
        align='end'
        size='large'
      >
        <StyledIconButton onClick={handleSortUp}>⬆</StyledIconButton>
        <StyledIconButton onClick={handleSortDown}>⬇</StyledIconButton>
      </StyledContainer>

      <StyledTransactions gap='0' align='center' size='large'>
        {displayedTransactions.map((transaction) => {
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
