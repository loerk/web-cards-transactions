import { StyledContainer } from '../common/Container.styled';
import Card from '../card/Card';
import { useTransactions } from '../../context/TransactionContext';

function Cards() {
  const { cards, loadingState } = useTransactions();

  if (loadingState.cards.loading) {
    return (
      <StyledContainer $align='center' $gap='2' size='medium'>
        <p>loading</p>
      </StyledContainer>
    );
  }

  if (loadingState.cards.error) {
    return (
      <StyledContainer $align='center' $gap='2' size='medium'>
        <p>{loadingState.cards.error}</p>
      </StyledContainer>
    );
  }

  if (!cards.length) {
    return;
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
