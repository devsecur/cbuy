'use client';
import React, { ChangeEvent, useEffect, useRef } from 'react';
import styles from './Dropdown.module.scss';
import { StyleType } from '@/lib/types/styles.type';

export interface OptionType {
  value: string;
  label: string;
}
export enum DropdownType {
  // eslint-disable-next-line no-unused-vars
  Primary = 'primary',
  // eslint-disable-next-line no-unused-vars
  Secondary = 'secondary',
}
export interface PropType {
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: string) => void | undefined;
  value?: string | undefined;
  options: OptionType[];
  type?: DropdownType | 'secondary' | 'primary';
  style?: StyleType;
  placeholder?: string;
}

export default function Dropdown({
  onChange,
  value,
  options,
  type,
  style,
  placeholder,
}: PropType) {
  const selectRef = useRef<HTMLSelectElement | null>(null);

  const selectClassName =
    type === DropdownType.Secondary
      ? `${styles.select} ${styles.secondary}`
      : `${styles.select} ${styles.primary}`;
  function handleChangeSelect(event: ChangeEvent<HTMLSelectElement>) {
    if (onChange) {
      onChange(event.target.value);
    }
  }

  const selectStyle = {
    ...style,
    width: style?.width ? style?.width : '339px',
  };
  useEffect(() => {
    if (selectRef.current) {
      selectRef.current.focus();
    }
  }, [selectRef]);

  return (
    <div className={styles.container}>
      <span className={styles.icon}>
        <></>
      </span>
      <select
        placeholder={placeholder}
        className={selectClassName}
        ref={selectRef}
        value={value}
        onChange={handleChangeSelect}
        style={selectStyle}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
