// noinspection TypeScriptValidateTypes

import { StyleType } from '@/lib/types/styles.type';
import React from 'react';
import styles from './Typography.module.scss';
import { IconRepository } from '@/lib/repository/icon.repository';
import { IconPropsType } from '@/lib/types/icons.type';

export interface PropType {
  value?: string | undefined;
  type?: TypographyType | 'secondary' | 'primary' | 'title' | 'h1';
  style?: StyleType;
  children?: React.ReactNode;
  icon?: keyof typeof IconRepository;
  iconStyle?: IconPropsType
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
  icon,
  iconStyle
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
  const IconStyleProps = {
    ...iconStyle, width:iconStyle?.width? iconStyle.width:20, height:iconStyle?.height?iconStyle.height:20}
  const IconComponent= IconRepository[icon];


  return (
    <div className={styles.container}>
      <div className={textClassName}>
        <div>
          {IconComponent && <IconComponent {...IconStyleProps}  />}
        </div>
        <div style={style}>
          <span> {children}</span>
          <span> {value}</span>
        </div>
      </div>
    </div>
  );
}

export default Typography;
