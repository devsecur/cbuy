import React from 'react';
import '../../../app/globals.scss';

import styles from './Box.module.scss';
export default function Box({
  children,
  variant = 'secondary',
  shape = 'round',
}: {
  children?: React.ReactNode;
  variant: 'secondary' | 'primary';
  shape?: string;
}) {
  const className = `${styles.container} ${styles[variant]}  ${styles[shape]} `;
  return <div className={className}>{children}</div>;
}
