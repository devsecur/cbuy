import { IconPropsType } from '@/lib/types/icons.type';
import React from 'react';

const HeartIcon = ({
  color = 'red',
  width = 24,
  height = 24,
  ...props
}: IconPropsType) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    width={width}
    height={height}
    {...props}
    color={color}
  >
    <path d='M20.84 4.03a5.5 5.5 0 0 0-7.78 0L12 5.16l-1.06-1.13a5.5 5.5 0 0 0-7.78 7.78l1.06 1.13L12 21l7.78-7.95 1.06-1.13a5.5 5.5 0 0 0 0-7.78z' />
  </svg>
);

export default HeartIcon;
