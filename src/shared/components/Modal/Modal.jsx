import { Component } from 'react';
import { createPortal } from 'react-dom';

import styles from '../../../components/styles.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.close);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.close);
  }

  close = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    const { children } = this.props;
    const { close } = this;

    return createPortal(
      <div className={styles.overlay} onClick={close}>
        <div className={styles.modal}>{children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
