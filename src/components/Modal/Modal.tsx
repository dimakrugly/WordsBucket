import React, { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

const modalRoot = document.getElementById('modal-root');

interface Props {
  children: ReactNode,
}
const Modal: React.FC<Props> = ({ children }) => {
  const el = document.createElement('div');

  useEffect(() => {
    modalRoot?.appendChild(el);
    return () => {
      modalRoot?.removeChild(el);
    };
  }, [el]);

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal__overlay" />
      <div className="modal__content">
        {children}
      </div>
    </div>,
    el,
  );
};

export default Modal;
