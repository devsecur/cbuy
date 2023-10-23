import React from 'react';
import styles from './Button.module.scss';
import { StyleType } from '@/lib/types/styles.type';
import Text, { TypographyType } from '../typography/Typography';

export interface PropType {
  onChange?: (value: string) => void | undefined;
  value?: string | undefined;
  type?: 'secondary' | 'primary';
  style?: StyleType;
  icon?: React.ReactNode; // To be changed
}
export default function Button() {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <Text value='Button' />
      </button>
    </div>
  );
}
