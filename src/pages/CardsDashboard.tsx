import { useEffect, useState } from 'react';
import _ from 'lodash';
import { ICard, ITransaction, getCards } from '../ApiClient';
import { StyledContainer } from '../components/styles/Container.styled';
import Cards from '../components/cards/Cards';
import Transactions from '../components/transactions/Transactions';

export type UserData = {
  cards: ICard[];
  transactions: ITransaction[];
  activeCard: ICard;
};

function CardsDashboard() {
  const [userData, setUserData] = useState<UserData>({
    cards: [],
    transactions: [],
    activeCard: { description: '', id: '' },
  });
  const loadCards = async () => {
    try {
      const cardDetails: ICard[] = await getCards();
      if (!cardDetails.length || _.isEqual(userData.cards, cardDetails)) {
        return;
      }
      setUserData({ ...userData, cards: cardDetails });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadCards();
  }, []);

  if (!userData) {
    return;
  }

  return (
    <StyledContainer align='center' size='large'>
      <Cards userData={userData} setUserData={setUserData} />
      <Transactions userData={userData} />
    </StyledContainer>
  );
}

export default CardsDashboard;
