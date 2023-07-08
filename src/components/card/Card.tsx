import { Dispatch } from 'react';
import { ITransaction, getTransactions } from '../../ApiClient';
import { StyledCard } from './Card.styled';
import _ from 'lodash';
import { UserData } from '../../pages/CardsDashboard';
type CardProps = {
  id: string;
  description: string;
  userData: UserData;
  setUserData: Dispatch<React.SetStateAction<UserData>>;
};
function Card({ id, description, userData, setUserData }: CardProps) {
  const variant = description === 'Private Card' ? 'private' : 'business';

  const getCardTransactions = async (cardId: string) => {
    try {
      const transactionDetails: ITransaction[] = await getTransactions(cardId);
      if (
        !transactionDetails.length ||
        _.isEqual(userData.transactions, transactionDetails)
      ) {
        return;
      }
      setUserData({
        ...userData,
        transactions: transactionDetails,
        activeCard: { description, id },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = () => {
    getCardTransactions(id);
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
