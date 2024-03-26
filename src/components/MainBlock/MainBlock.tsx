import React from 'react';
import { Card } from '../Card/Card';

import './MainBlock.scss';

interface Props {
  card: { wordCardId: string,
    frontSideCard: string,
    backSideCard: string,
    note: {
      text: string,
    }
  },
}
export const MainBlock: React.FC<Props> = ({ card }) => {
  const { text } = card.note;

  return (
    <div className="main-block">
      <button
        className="main-block__button main-block__button-up"
        type="button"
      >
        Repeat
      </button>
      <div className="main-block__mid">
        <button
          className="main-block__button main-block__button-change"
          type="button"
        >
          Previous
        </button>
        <Card card={card} />
        <button
          className="main-block__button main-block__button-change"
          type="button"
        >
          Next
        </button>
      </div>
      <div className="main-block__text">{text}</div>
      <button
        className="main-block__button main-block__button-down"
        type="button"
      >
        I know!
      </button>
    </div>
  );
};
