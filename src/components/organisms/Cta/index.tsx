import React from 'react';
import styles from './styles.module.css';
import Search from '@/components/organisms/Search';
import Slider from '@/components/organisms/Slider';

const Cta = () => {
  return (
    <div className={styles.cta}>
      <Search />
      <Slider />
    </div>
  );
};

export default Cta;
