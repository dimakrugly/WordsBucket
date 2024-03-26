import React from 'react';
import Modal from '../../components/Modal/Modal';
import Registration from '../../components/Registration/Registration';
import './HomePage.scss';
import { MainBlock } from '../../components/MainBlock/MainBlock';
import { Paper } from '../../components/Paper/Paper';

interface Props {
  showModal: boolean,
  handleRegistration: (event: React.ChangeEvent<HTMLFormElement>) => void,
  card: { wordCardId: string,
    frontSideCard: string,
    backSideCard: string,
    note: {
      text: string,
    }
  },
}

export const HomePageView: React.FC<Props> = ({ showModal, handleRegistration, card }) => (
  <div className="home-page">
    {showModal && (
    <Modal>
      <Registration onSubmit={handleRegistration} />
    </Modal>
    )}
    <div className="home-page__content">
      <Paper />
      <MainBlock card={card} />
    </div>
  </div>
);
