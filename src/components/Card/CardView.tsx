import React from 'react';
import './Card.scss';
import Card from '@mui/material/Card';
import { CardContent, Typography } from '@mui/material';

interface Props {
  card: { wordCardId: string,
    frontSideCard: string,
    backSideCard: string,
    note: {
      text: string,
    }
  },
  isReversed: boolean,
  onClick: () => void,
}

export const CardView: React.FC<Props> = ({ card, isReversed, onClick }) => {
  const { frontSideCard, backSideCard } = card;

  return (
    <div className="card">
      <div className={`rotate ${isReversed ? 'reversed' : '_'}`}>
        <Card
          sx={{
            width: 300, height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center',
          }}
          onClick={onClick}
        >
          <CardContent>
            <div className={`content ${isReversed ? 'reversed-content' : ''}`}>
              <Typography variant="h5" component="div">
                {isReversed ? frontSideCard : backSideCard}
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
