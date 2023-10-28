import React from 'react';
import styles from './MainBoxtext.module.scss';
import Button from '@/components/atoms/button/Button';

const MainBoxtext: React.FC<{}> = ({}) => {
  return (
    <>
      <div className={styles.mainbox_container}>
        <div className={styles.heading}>
          <span className={styles.red}>Easy </span>
          <span>Selling And Reliability</span>
        </div>
        <div className={styles.caption}>
          Investors looking for companies around them
        </div>
        <div className={styles.action}>
          <Button variant='primary'>make an appointment</Button>
          <Button>make an appointment</Button>
        </div>
      </div>
    </>
  );
};

export default MainBoxtext;
