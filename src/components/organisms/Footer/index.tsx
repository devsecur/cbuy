import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Link href='/privacy-policy'>Über CBUY.EXPERT</Link>
      <Link href='/privacy-policy'>Impressum</Link>
      <Link href='/privacy-policy'>AGB</Link>
      <Link href='/privacy-policy'>Datenschutz</Link>
      <Link href='/privacy-policy'>Kontakt</Link>
    </footer>
  );
};

export default Footer;
