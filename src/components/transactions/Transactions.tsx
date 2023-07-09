import { useState } from 'react';

import { StyledContainer } from '../styles/Container.styled';
import { StyledTransactions } from '../styles/Transactions.styled';
import { useTransactions } from '../../context/TransactionContext';
import Transaction from '../transaction/Transaction';
import Filter from '../filter/Filter';

function Transactions() {
  const { transactions, selectedCard, filter } = useTransactions();

  if (!selectedCard.id) {
    return (
      <StyledContainer align='center' gap='2' size='medium'>
        <p>Please select a card</p>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer gap='3' align='center' size='medium'>
      <Filter />
      <StyledTransactions gap='0' align='center' size='large'>
        {transactions.map((transaction) => {
          const { id, amount, description } = transaction;
          if (transaction.amount >= Number(filter.replace(',', '.'))) {
            return (
              <Transaction key={id} amount={amount} description={description} />
            );
          }
        })}
      </StyledTransactions>
    </StyledContainer>
  );
}

export default Transactions;
