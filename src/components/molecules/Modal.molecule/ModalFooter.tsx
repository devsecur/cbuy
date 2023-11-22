import React from 'react';
import styles from './styles.module.scss';
const ModalFooter = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.modal_footer}>{children}</div>;
};

export default ModalFooter;
