import { IconPropsType } from '@/lib/types/icons.type';
import React from 'react';

const CloseIcon = ({
  color = '#7C8895',
  width = 24,
  height = 24,
  ...props
}: IconPropsType) => (
  <svg
    width={width}
    height={height}
    {...props}
    stroke={color}
    viewBox='0 0 18 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g id='X'>
      <path
        id='Icon'
        d='M4.5 13.5L13.5 4.5M4.5 4.5L13.5 13.5'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </g>
  </svg>
);

export default CloseIcon;
