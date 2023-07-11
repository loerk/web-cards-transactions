import { StyledContainer } from '../common/Container.styled';
import { useTransactions } from '../../context/TransactionContext';
import Card from '../card/Card';

function Cards() {
  const { cards, loadingState } = useTransactions();
  if (loadingState.cards.error) {
    return (
      <StyledContainer $align='center' $gap='2' size='medium'>
        <p>{loadingState.cards.error}</p>
      </StyledContainer>
    );
  }
  return (
    <StyledContainer $align='space-between' size='medium' $gap='2'>
      {cards?.map((card) => (
        <Card key={card.id} id={card.id} description={card.description} />
      ))}
    </StyledContainer>
  );
}

export default Cards;
