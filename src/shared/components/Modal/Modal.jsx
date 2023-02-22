import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from '../../../components/styles.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ closeModal, children }) => {
  const close = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', close);

    return () => document.removeEventListener('keydown', close);
  });

  return createPortal(
    <div className={styles.overlay} onClick={close}>
      <div className={styles.modal}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;
