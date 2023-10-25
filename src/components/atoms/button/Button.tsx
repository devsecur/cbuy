import React, { MouseEventHandler } from 'react';
import styles from './Button.module.scss';
import { StyleType } from '@/lib/types/styles.type';
import Text, { TypographyType } from '../typography/Typography';
import { IconRepository } from '@/lib/repository/icon.repository';

export interface PropType {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  value?: string | undefined;
  type?: 'secondary' | 'primary' | 'tertiary' | ButtonType;
  textstyle?: StyleType;
  icon?: keyof typeof IconRepository;
  children?: React.ReactNode;
}

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}
export default function Button({
  onClick,
  value,
  type = 'secondary',
  icon,
  children,
  textstyle,
}: PropType) {
  const buttonClassName = `${styles.button} ${styles.children} ${
    type === ButtonType.Secondary
      ? styles.secondary
      : type === ButtonType.Tertiary
      ? styles.tertiary
      : styles.primary
  }`;
  const textType =
    type === ButtonType.Primary
      ? TypographyType.Primary
      : type === ButtonType.Tertiary
      ? TypographyType.tertiary
      : TypographyType.h1;

  const btnClass = `${styles.container} ${
    type === ButtonType.Tertiary ?? styles.tertiary_btn
  }`;
  return (
    <div className={styles.container}>
      <button className={buttonClassName} onClick={onClick}>
        {value && (
          <Text value={value} icon={icon} type={textType} style={textstyle} />
        )}
        <div>{children}</div>
      </button>
    </div>
  );
}
