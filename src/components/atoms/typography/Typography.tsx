/* eslint-disable no-unused-vars */
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
  icon?: keyof typeof IconRepository | undefined;
  iconStyle?: IconPropsType;
}

export enum TypographyType {
  Primary = 'primary',
  Subtitle = 'subtitle',
  Title = 'title',
  h1 = 'h1',
  Caption = 'caption',
  Body = 'body',
  tertiary = 'tertairy',
}
function Typography({
  value = 'text',
  type = TypographyType.Body,
  style,
  children,
  icon,
  iconStyle,
}: PropType) {
  // const textClassName = `${styles.text} ${
  //   type === TypographyType.Subtitle
  //     ? styles.subtitle
  //     : type === TypographyType.Title
  //     ? styles.title
  //     : type === TypographyType.h1
  //     ? styles.h1
  //     : type === TypographyType.Caption
  //     ? styles.caption
  //     : type === TypographyType.Body
  //     ? styles.body
  //     : type === TypographyType.tertiary
  //     ? styles.tertiary_btn
  //     : styles.primary
  // }`;
  const textClassName = `${styles.text} ${styles[type]}`;

  const IconStyleProps = {
    ...iconStyle,
    width: iconStyle?.width ? iconStyle.width : 20,
    height: iconStyle?.height ? iconStyle.height : 20,
  };

  let IconComponent;

  if (icon) {
    IconComponent = IconRepository[icon];
  } else {
    IconComponent = null; // Replace with your default icon component: For now it will remain null
  }

  return (
    <span className={styles.container}>
      <span className={textClassName}>
        <span>{IconComponent && <IconComponent {...IconStyleProps} />}</span>
        <span style={style}>
          <span> {children}</span>
          <span> {value}</span>
        </span>
      </span>
    </span>
  );
}

export default Typography;
