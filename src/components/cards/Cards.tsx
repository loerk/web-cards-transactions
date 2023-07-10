import { StyledContainer } from '../common/Container.styled';
import { useTransactions } from '../../context/TransactionContext';
import Card from '../card/Card';

function Cards() {
  const { cards } = useTransactions();

  return (
    <StyledContainer $align='space-between' size='medium' $gap='2'>
      {cards?.map((card) => (
        <Card key={card.id} id={card.id} description={card.description} />
      ))}
    </StyledContainer>
  );
}

export default Cards;
