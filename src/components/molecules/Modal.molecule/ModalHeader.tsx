import React, { FC } from 'react';
import styles from './styles.module.scss';

interface ModalHeaderProps {
  title: string;
}

const ModalHeader: FC<ModalHeaderProps> = ({ title }) => {
  return <div className={styles.modal_header}>{title}</div>;
};

export default ModalHeader;
