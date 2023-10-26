'use client';
import React, { ChangeEvent, useEffect, useRef } from 'react';
import styles from './Input.module.scss';
import { StyleType } from '@/lib/types/styles.type';

export enum InputType {
  Primary = 'primary',
  Secondary = 'secondary',
}

export interface InputPropType {
  onChange?: (value: string) => void | undefined;
  value?: string | undefined;
  type?: InputType | 'secondary' | 'primary';
  placeholder?: string;
  style?: StyleType;
}

export default function Input({
  onChange,
  value,
  type,
  placeholder,
  style,
}: InputPropType) {
  const inputRef = useRef<HTMLInputElement>(null);

  const inputClassName =
    type === InputType.Secondary
      ? `${styles.input} ${styles.secondary}`
      : `${styles.input} ${styles.primary}`;

  const inputStyle = {
    ...style,
    width: style?.width ? style?.width : '339px',
  };
  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    onChange ? onChange(event.target.value) : null;
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className={styles.container}>
      <input
        style={inputStyle}
        placeholder={placeholder}
        className={inputClassName}
        type='text'
        ref={inputRef}
        value={value}
        onChange={handleChangeInput}
      />
    </div>
  );
}
