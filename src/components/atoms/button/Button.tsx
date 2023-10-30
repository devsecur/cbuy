import React from 'react';
import styles from './Button.module.scss';
import { StyleType } from '@/lib/types/styles.type';
import Text, { TypographyType } from '../typography/Typography';
import { IconRepository } from '@/lib/repository/icon.repository';

export interface ButtonPropType {
  // eslint-disable-next-line no-unused-vars
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  value?: string | undefined;
  variant?: 'secondary' | 'primary' | 'tertiary' | ButtonType;
  textstyle?: StyleType;
  icon?: keyof typeof IconRepository;
  children?: React.ReactNode;
  width?: number | string;
  height?: number | string;
}

export enum ButtonType {
  // eslint-disable-next-line no-unused-vars
  Primary = 'primary',
  // eslint-disable-next-line no-unused-vars
  Secondary = 'secondary',
  // eslint-disable-next-line no-unused-vars
  Tertiary = 'tertiary',
  // eslint-disable-next-line no-unused-vars
  Custom_1 = 'custom_1',
  // eslint-disable-next-line no-unused-vars
  Custom_2 = 'custom_2',
}
export default function Button({
  onClick,
  value,
  variant = 'secondary',
  icon,
  children,
  textstyle,
  width,
  height,
}: ButtonPropType) {
  const buttonClassName = `${styles.button} ${styles.children} ${
    styles[`${variant}`]
  }`;

  let textType: TypographyType;

  switch (variant) {
    case ButtonType.Primary:
      textType = TypographyType.Primary;
      break;
    case ButtonType.Tertiary:
      textType = TypographyType.tertiary;
      break;
    case ButtonType.Custom_1:
      textType = TypographyType.custom_white;
      break;
    case ButtonType.Custom_2:
      textType = TypographyType.custom_red;
      break;
    default:
      textType = TypographyType.h1;
      break;
  }
  const containerStyle: StyleType = {
    width: String(width).includes('full')
      ? '100%'
      : String(width).includes('px')
      ? String(width).replace('px', 'px')
      : String(width).concat('px'),
    height: String(height).includes('full')
      ? '100%'
      : String(height).includes('px')
      ? String(height).replace('px', 'px')
      : String(height).concat('px'),
  };

  // const btnClass = `${styles.container} ${
  //   variant === ButtonType.Tertiary ?? styles.tertiary_btn
  // }`;
  const formatStyle = {
    ...textstyle,
    color: variant === 'primary' ? 'white' : '',
  };
  return (
    <div className={styles.container} style={containerStyle}>
      <button className={buttonClassName} onClick={onClick}>
        {value && (
          <Text value={value} icon={icon} type={textType} style={formatStyle} />
        )}
        {!value && (
          <Text value={value} icon={icon} type={textType} style={formatStyle}>
            {children}
          </Text>
        )}
      </button>
    </div>
  );
}
