'use client';
import React, { useState } from 'react';
import styles from './styles.module.css';
import Search from '@/components/molecules/Search';
import Slider from '@/components/molecules/Slider';
import Searchbar from '@/components/molecules/Searchbar/Searchbar';
import { SearchButtonPropType } from '@/components/molecules/SearchButton/SearchButton';

const Cta = () => {
  const [inputValue, setValue] = useState<string>();

  const searchButton: SearchButtonPropType[] = [
    {
      title: 'title 1',
      caption: 'caption ',
      onClick: () => console.log('Function 1'),
    },
    {
      title: 'title 2',
      caption: 'caption 2',
      onClick: () => console.log('Function 2'),
    },
    {
      title: 'title 3',
      caption: 'caption 3',
      onClick: () => console.log('Function 3'),
    },
  ];
  return (
    <div className={styles.cta}>
      <Search />
      <Searchbar
        searchButtonpProps={searchButton}
        inputProps={{
          onChange: setValue,
          value: inputValue,
          placeholder: 'Suche...',
        }}
      />
      <Slider />
    </div>
  );
};

export default Cta;
