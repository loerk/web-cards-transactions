import { ICard } from '../../ApiClient';
import { StyledTransaction } from './Transaction.styled';
type TransactionProps = {
  amount: number;
  description: string;
  activeCard: ICard;
};

function Transaction({ amount, description, activeCard }: TransactionProps) {
  const variant =
    activeCard.description === 'Private Card' ? 'private' : 'business';
  const moneyFormat = amount.toString().replace('.', ',');

  return (
    <StyledTransaction variant={variant}>
      <p>{description}</p>
      <p>{moneyFormat}€</p>
    </StyledTransaction>
  );
}

export default Transaction;
