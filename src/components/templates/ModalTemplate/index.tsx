import Modal from '@/components/organisms/Modal/Modal';
import React, { FC, useState } from 'react';
import styles from './styles.module.scss';

const ModalTemplate: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button className={styles.modal_template} onClick={handleOpenModal}>
        Open Modal
      </button>
      <Modal title='test' isOpen={isOpen} onClose={handleCloseModal}>
        {children}
      </Modal>
    </div>
  );
};

export default ModalTemplate;
