import React, { useState } from 'react';
import { HomePageView } from './HomePageView';

export function HomePage() {
  const [showModal] = useState(false);

  const handleRegistration = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Registering...');
  };

  const newCard = {
    wordCardId: 'cards id',
    frontSideCard: 'someWordEng',
    backSideCard: 'someUaWord',
    note: {
      text: 'some note about word',
    },
  };

  return (
    <HomePageView
      showModal={showModal}
      handleRegistration={handleRegistration}
      card={newCard}
    />
  );
}
