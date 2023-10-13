"use client"
import React, { ChangeEvent, useEffect, useRef } from 'react';
import styles from './Input.module.scss';

export enum InputType {
  Primary = 'primary',
  Secondary = 'secondary'
}

export interface PropType {
  onChange?:(value:string)=>void|undefined
  value?:string|undefined
  type?: InputType | 'secondary'| 'primary'
}

export default function Input({onChange, value, type}:PropType) {
  const inputRef = useRef<HTMLInputElement>(null);

  const inputClassName = type === InputType.Secondary ? `${styles.input} ${styles.secondary}` : `${styles.input} ${styles.primary}`;

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    onChange?onChange(event.target.value):null
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className={styles.container}>
      <input className={inputClassName} type="text" ref={inputRef} value={value} onChange={handleChangeInput} />
    </div>
  );
}