import { useTransactions } from '../../context/TransactionContext';
import { StyledTransaction } from '../styles/Transaction.styled';

type TransactionProps = {
  amount: number;
  description: string;
};

function Transaction({ amount, description }: TransactionProps) {
  const { selectedCard } = useTransactions();
  const variant =
    selectedCard.description === 'Private Card' ? 'private' : 'business';
  const formattedAmount = amount.toString().replace('.', ',');

  return (
    <StyledTransaction variant={variant}>
      <p>{description}</p>
      <p>{formattedAmount}€</p>
    </StyledTransaction>
  );
}

export default Transaction;
