import { CSSProperties, SVGProps } from 'react';

export interface IconPropsType extends SVGProps<SVGSVGElement> {
  color?: CSSProperties['color'];
  stroke?: CSSProperties['stroke'];
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];

  // // eslint-disable-next-line
  // props?: any;
}
