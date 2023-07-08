import { ICard } from '../../ApiClient';
import { StyledContainer } from '../styles/Container.styled';
import _ from 'lodash';
import Card from '../card/Card';
import { Dispatch } from 'react';
import { UserData } from '../../pages/CardsDashboard';

type CardProps = {
  userData: UserData;
  setUserData: Dispatch<React.SetStateAction<UserData>>;
};

function Cards({ setUserData, userData }: CardProps) {
  const { cards } = userData;
  return (
    <StyledContainer align='center' size='medium'>
      {cards?.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          description={card.description}
          setUserData={setUserData}
          userData={userData}
        />
      ))}
    </StyledContainer>
  );
}

export default Cards;
