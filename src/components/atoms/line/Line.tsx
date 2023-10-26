import React, { CSSProperties } from 'react';
import styles from './Line.module.scss';

interface VerticalLineProps {
  height?: number;
  color?: CSSProperties['backgroundColor'];
}
export default function Line(props: VerticalLineProps) {
  const style: CSSProperties = {
    alignSelf: 'center',
    height: `${props.height ?? '42'}px`,
    backgroundColor: props.color ?? '#8E98A5',
  };
  return <div className={styles.line_container} style={style}></div>;
}
