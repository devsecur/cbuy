import React from 'react';
import styles from './styles.module.css';
import Search from '@/components/molecules/Search';
import Slider from '@/components/molecules/Slider';
import Searchbar from '@/components/molecules/Searchbar/Searchbar';

const Cta = () => {
  return (
    <div className={styles.cta}>
      <Search />
      <Searchbar />
      <Slider />
    </div>
  );
};

export default Cta;
