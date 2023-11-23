import ModalContainer from '@/components/atoms/modal/ModalContainer';
import ModalOverlay from '@/components/atoms/modal/ModalOverlay';
import ModalBody from '@/components/molecules/Modal.molecule/ModalBody';
import ModalHeader from '@/components/molecules/Modal.molecule/ModalHeader';
import React, { FC, useEffect } from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Prevent the event from bubbling up to the container
    event.stopPropagation();
  };

  if (!isOpen) return null;
  return (
    <div>
      <ModalOverlay onClose={onClose}></ModalOverlay>
      <div className={styles.modal_content} onClick={handleOverlayClick}>
        <ModalContainer>
          {title && <ModalHeader title={title} />}
          <ModalBody>{children}</ModalBody>
        </ModalContainer>
      </div>
    </div>
  );
};

export default Modal;
