'use client';
import React, { useState } from 'react';
import styles from './styles.module.css';
import Search from '@/components/molecules/Search';
import Slider, { SliderDataType } from '@/components/molecules/Slider';
import Searchbar from '@/components/molecules/Searchbar/Searchbar';
import { SearchButtonPropType } from '@/components/molecules/SearchButton/SearchButton';
import ModalTemplate from '@/components/templates/ModalTemplate';

const Cta = () => {
  const [inputValue, setValue] = useState<string>();
  const [isOpen, setIsOpen] = useState(false);

  const searchButton: SearchButtonPropType[] = [
    {
      title: 'title 1',
      caption: 'caption ',
      onClick: () => setIsOpen(true),
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
  const slider1: SliderDataType[] = [
    {
      img: 'https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg',
      title: 'First',
      caption: 'Companies',
      companyTitle: 'HERSTELLER UND HÄNDLER VON GRAPHISCHEN MASCHINEN',
      info: `Überblick Hersteller und Händler von Grafischen Maschinen Umsätze
      projektabhängig bis zu 1.500 TEUR gute Kontakte und lokale Nähe zu
      Herstellern Weltweiter Kunden und… Lieferantenbeziehungen
      Unternehmenssitz in Süddeutschland Leistungen/ Produkte Verkauf
      von`,
      amount: '1 million to 1.99 million',
      people: '10 to 49',
      negotiation: 'Verhandlungssache',
      lang: 'En',
    },
    {
      img: 'https://wallpapercave.com/wp/wp3386769.jpg',
      title: 'Second',
      caption: 'Companies',
      companyTitle: 'HERSTELLER UND HÄNDLER VON GRAPHISCHEN MASCHINEN',
      info: `Überblick Hersteller und Händler von Grafischen Maschinen Umsätze
      projektabhängig bis zu 1.500 TEUR gute Kontakte und lokale Nähe zu
      Herstellern Weltweiter Kunden und… Lieferantenbeziehungen
      Unternehmenssitz in Süddeutschland Leistungen/ Produkte Verkauf
      von`,
      amount: '1 million to 1.99 million',
      people: '10 to 49',
      negotiation: 'Verhandlungssache',
      lang: 'De',
    },
    {
      img: 'https://wallpaperaccess.com/full/809523.jpg',
      title: 'Third',
      caption: 'Companies',
      companyTitle: 'HERSTELLER UND HÄNDLER VON GRAPHISCHEN MASCHINEN',
      info: `Überblick Hersteller und Händler von Grafischen Maschinen Umsätze
      projektabhängig bis zu 1.500 TEUR gute Kontakte und lokale Nähe zu
      Herstellern Weltweiter Kunden und… Lieferantenbeziehungen
      Unternehmenssitz in Süddeutschland Leistungen/ Produkte Verkauf
      von`,
      amount: '1 million to 1.99 million',
      people: '10 to 49',
      negotiation: 'Verhandlungssache',
      lang: 'En',
    },
    {
      img: 'https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg',
      title: 'Fouth',
      caption: 'Companies',
      companyTitle: 'HERSTELLER UND HÄNDLER VON GRAPHISCHEN MASCHINEN',
      info: `Überblick Hersteller und Händler von Grafischen Maschinen Umsätze
      projektabhängig bis zu 1.500 TEUR gute Kontakte und lokale Nähe zu
      Herstellern Weltweiter Kunden und… Lieferantenbeziehungen
      Unternehmenssitz in Süddeutschland Leistungen/ Produkte Verkauf
      von`,
      amount: '1 million to 1.99 million',
      people: '10 to 49',
      negotiation: 'Verhandlungssache',
      lang: 'De',
    },
  ];
  return (
    <div className={styles.cta}>
      <div className={styles.backdrop}></div>
      <Search />
      <div className={styles.searchModal}>
        <Searchbar
          searchButtonpProps={searchButton}
          inputProps={{
            onChange: setValue,
            value: inputValue,
            placeholder: 'Suche...',
          }}
        ></Searchbar>
        <ModalTemplate
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        ></ModalTemplate>
      </div>

      <div className='p-2'>
        <Slider slides={slider1} />
      </div>
    </div>
  );
};

export default Cta;
