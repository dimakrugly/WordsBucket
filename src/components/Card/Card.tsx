import React, { useState } from 'react';
import { CardView } from './CardView';

interface Props {
  card: { wordCardId: string,
    frontSideCard: string,
    backSideCard: string,
    note: {
      text: string,
    }
  }
}
export const Card: React.FC<Props> = ({ card }) => {
  const [isReversed, setIsReversed] = useState(false);
  const handleCardClick = () => {
    setIsReversed(!isReversed);
  };

  return (
    <CardView
      card={card}
      isReversed={isReversed}
      onClick={handleCardClick}
    />
  );
};
