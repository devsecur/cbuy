import React, { FC } from 'react';
import styles from './Modal.atom.module.scss';

interface ModalOverlayProps {
  onClose: () => void;
  children: React.ReactNode;
}

const ModalOverlay: FC<ModalOverlayProps> = ({ onClose, children }) => {
  return (
    <div className={styles.modal_overlay} onClick={onClose}>
      {/* Add additional styling and overlay content if needed */}
      {children}
    </div>
  );
};

export default ModalOverlay;
