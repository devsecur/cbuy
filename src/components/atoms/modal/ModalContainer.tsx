import React from 'react';
import styles from './Modal.atom.module.scss';

const ModalContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.modal_container}>{children}</div>;
};

export default ModalContainer;
