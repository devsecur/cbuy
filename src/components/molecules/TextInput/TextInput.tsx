import React from 'react';
import Typography, { TypographyType } from '../../atoms/typography/Typography';
import Input, { InputType } from '../../atoms/input/Input';
import { StyleType } from '@/lib/types/styles.type';
import styles from './TextInput.module.scss';
export interface PropType {
  onChange?: (value: string) => void | undefined;
  text?: string | undefined;
  inputValue?: string | undefined;
  type?: InputType | 'secondary' | 'primary';
  placeholder?: string;
  style?: StyleType;
}

export default function TextInput(props: PropType) {
  return (
    <div className={`${styles.container} ${styles.text_input} `}>
      <Typography value={props.text} type={TypographyType.Title} />
      <Input
        onChange={props.onChange}
        value={props.inputValue}
        placeholder={props.placeholder}
        style={props.style}
        type={props.type}
      />
    </div>
  );
}
