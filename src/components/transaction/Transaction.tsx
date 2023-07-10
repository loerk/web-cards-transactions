import { useTransactions } from '../../context/TransactionContext';
import { StyledText } from '../common/Text.styled';
import { StyledTransaction } from './Transaction.styled';

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
    <StyledTransaction $variant={variant}>
      <StyledText width='40rem' overflow='ellipsis'>
        {description}
      </StyledText>
      <p>{formattedAmount}€</p>
    </StyledTransaction>
  );
}

export default Transaction;
