import { StyleType } from '@/lib/types/styles.type';
import React from 'react';
import styles from './Typography.module.scss';

export interface PropType {
  value?: string | undefined;
  type?: TypographyType | 'secondary' | 'primary' | 'title' | 'h1';
  style?: StyleType;
  children?: React.ReactNode;
}
export enum TypographyType {
  Primary = 'primary',
  Subtitle = 'subtitle',
  Title = 'title',
  h1 = 'h1',
  Caption = 'caption',
  Body = 'body',
}
function Typography({
  value = 'text',
  type = TypographyType.Primary,
  style,
  children,
}: PropType) {
  const textClassName = `${styles.text} ${
    type === TypographyType.Subtitle
      ? styles.subtitle
      : type === TypographyType.Title
      ? styles.title
      : type === TypographyType.h1
      ? styles.h1
      : type === TypographyType.Body
      ? styles.body
      : styles.primary
  }`;
  return (
    <div className={styles.container}>
      <div className={textClassName}>
        <span> {children}</span>
        <span> {value}</span>
      </div>
    </div>
  );
}

export default Typography;
