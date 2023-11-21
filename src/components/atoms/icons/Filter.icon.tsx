import { IconPropsType } from '@/lib/types/icons.type';
import React from 'react';

const FilterIcon = ({
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
    <g id='Filter'>
      <path
        id='Vector 7'
        d='M3.75 9L3.75 3'
        // stroke='#1B2940'
        stroke-linecap='round'
      />
      <path
        id='Vector 9'
        d='M14.25 15L14.25 12.75'
        // stroke='#1B2940'
        stroke-linecap='round'
      />
      <path
        id='Vector 8'
        d='M3.75 15L3.75 12'
        // stroke='#1B2940'
        stroke-linecap='round'
      />
      <path
        id='Vector 10'
        d='M14.25 9.75L14.25 3'
        // stroke='#1B2940'
        stroke-linecap='round'
      />
      <path
        id='Vector 11'
        d='M9 5.25L9 3'
        // stroke='#1B2940'
        stroke-linecap='round'
      />
      <path
        id='Vector 12'
        d='M9 15L9 8.25'
        // stroke='#1B2940'
        stroke-linecap='round'
      />
      <circle
        id='Ellipse 36'
        cx='3.75'
        cy='10.5'
        r='1.5'
        // stroke='#1B2940'
        stroke-linecap='round'
      />
      <circle
        id='Ellipse 37'
        cx='9'
        cy='6.75'
        r='1.5'
        // stroke='#1B2940'
        stroke-linecap='round'
      />
      <circle
        id='Ellipse 38'
        cx='14.25'
        cy='11.25'
        r='1.5'
        // stroke='#1B2940'
        stroke-linecap='round'
      />
    </g>
  </svg>
);

export default FilterIcon;
