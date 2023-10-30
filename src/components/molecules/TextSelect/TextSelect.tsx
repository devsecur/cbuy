import React from 'react';
import Typography, { TypographyType } from '../../atoms/typography/Typography';
import { StyleType } from '@/lib/types/styles.type';
import styles from './TextSelect.module.scss';
import Dropdown, {
  DropdownType,
  OptionType,
} from '@/components/atoms/dropdown/Dropdown';
export interface PropType {
  onChange?: (value: string) => void | undefined;
  text?: string | undefined;
  options: OptionType[];
  type?: DropdownType | 'secondary' | 'primary';
  placeholder?: string;
  style?: StyleType;
  selectValue?: string;
}

export default function TextSelect(props: PropType) {
  return (
    <div className={`${styles.container} ${styles.text_input} `}>
      <Typography value={props.text} type={TypographyType.Title} />
      <Dropdown
        options={props.options}
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.selectValue}
        style={props.style}
      />
    </div>
  );
}
