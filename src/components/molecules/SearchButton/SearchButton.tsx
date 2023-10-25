import Button from '@/components/atoms/button/Button';
import styles from './SearchButton.module.scss';

import React from 'react';
import Text, { TypographyType } from '@/components/atoms/typography/Typography';

export interface PropType {
  onClick?: () => void;
  title?: string;
  caption?: string;
}
export default function SearchButton(props: PropType) {
  return (
    <div className={styles.container}>
      <Button onClick={props.onClick} value={undefined} type='secondary'>
        <div className={styles.button_search}>
          <Text value={props.title} type='title' />
          <Text value={props.caption} type={TypographyType.Caption} />
        </div>
      </Button>
    </div>
  );
}
