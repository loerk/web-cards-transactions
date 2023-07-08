import Transaction from '../transaction/Transaction';
import { UserData } from '../../pages/CardsDashboard';
import Filter from '../filter/Filter';
import { useState } from 'react';
import { StyledTransactions } from './Transactions.styled';

type TransactionProps = {
  userData: UserData;
};
function Transactions({ userData }: TransactionProps) {
  const [amountFilter, setAmountFilter] = useState('');
  return (
    <StyledTransactions align='center' size='medium'>
      <Filter setAmountFilter={setAmountFilter} />
      {!amountFilter &&
        userData.transactions.map((transaction) => {
          return (
            <Transaction
              key={transaction.id}
              activeCard={userData.activeCard}
              amount={transaction.amount}
              description={transaction.description}
            ></Transaction>
          );
        })}
      {amountFilter &&
        userData.transactions.map((transaction) => {
          if (
            transaction.amount
              .toString()
              .startsWith(amountFilter.replace(',', '.'))
          ) {
            return (
              <Transaction
                key={transaction.id}
                activeCard={userData.activeCard}
                amount={transaction.amount}
                description={transaction.description}
              ></Transaction>
            );
          }
        })}
    </StyledTransactions>
  );
}

export default Transactions;
