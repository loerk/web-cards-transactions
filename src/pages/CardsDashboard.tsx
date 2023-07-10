import { StyledContainer } from '../components/common/Container.styled';
import Cards from '../components/cards/Cards';
import Transactions from '../components/transactions/Transactions';

function CardsDashboard() {
  return (
    <StyledContainer
      style={{ marginTop: '10rem', marginBottom: '15rem' }}
      $align='center'
      size='large'
      $gap='2'
    >
      <Cards />
      <Transactions />
    </StyledContainer>
  );
}

export default CardsDashboard;
