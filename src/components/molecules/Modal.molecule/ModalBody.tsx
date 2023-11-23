import React from 'react';
import styles from './styles.module.scss';
const ModalBody = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.modal_body}>{children}</div>;
};

export default ModalBody;
