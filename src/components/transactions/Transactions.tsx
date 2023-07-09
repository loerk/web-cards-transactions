import { useState } from 'react';

import { StyledContainer } from '../styles/Container.styled';
import { StyledTransactions } from '../styles/Transactions.styled';
import { useTransactions } from '../../context/TransactionContext';
import Transaction from '../transaction/Transaction';
import Filter from '../filter/Filter';

function Transactions() {
  const [amountFilter, setAmountFilter] = useState('');

  const { transactions, selectedCard } = useTransactions();

  if (!selectedCard.id) {
    return (
      <StyledContainer align='center' gap='2' size='medium'>
        <p>Please select a card</p>
      </StyledContainer>
    );
  }
  return (
    <StyledContainer gap='2' align='center' size='medium'>
      <Filter setAmountFilter={setAmountFilter} />
      <StyledTransactions gap='2' align='center' size='large'>
        {!amountFilter &&
          transactions.map((transaction) => {
            const { id, amount, description } = transaction;
            return (
              <Transaction key={id} amount={amount} description={description} />
            );
          })}
        {amountFilter &&
          transactions.map((transaction) => {
            const { id, amount, description } = transaction;
            if (amount.toString().startsWith(amountFilter.replace(',', '.'))) {
              return (
                <Transaction
                  key={id}
                  amount={amount}
                  description={description}
                />
              );
            }
          })}
      </StyledTransactions>
    </StyledContainer>
  );
}

export default Transactions;
