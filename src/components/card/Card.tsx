import { StyledCard } from '../styles/Card.styled';
import { useTransactions } from '../../context/TransactionContext';

type CardProps = {
  id: string;
  description: string;
};

function Card({ id, description }: CardProps) {
  const variant = description === 'Private Card' ? 'private' : 'business';
  const { setSelectedCard, setFilter } = useTransactions();

  const handleClick = () => {
    setFilter('');
    setSelectedCard(id);
  };

  return (
    <StyledCard onClick={handleClick} variant={variant}>
      <div>
        <p>{description}</p>
        <p>{id}</p>
      </div>
    </StyledCard>
  );
}
export default Card;
