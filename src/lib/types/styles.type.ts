import { CSSProperties } from "react";

export interface StyleType extends CSSProperties {
    width?: string | number;
    height?: string | number;
    size?: string | number;
    color?: string;
    backgroundColor?: string;
  }
  