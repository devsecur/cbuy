import Button, { ButtonType } from '@/components/atoms/button/Button';
import styles from './SearchButton.module.scss';

import React from 'react';
import Text, { TypographyType } from '@/components/atoms/typography/Typography';

export interface SearchButtonPropType {
  onClick?: () => void;
  title?: string;
  caption?: string;
}
export default function SearchButton(props: SearchButtonPropType) {
  return (
    <div className={styles.container}>
      <Button
        onClick={props.onClick}
        value={undefined}
        variant={ButtonType.Secondary}
      >
        <div className={styles.button_search}>
          <Text value={props.title} type='title' />
          <Text value={props.caption} type={TypographyType.Caption} />
        </div>
      </Button>
    </div>
  );
}
