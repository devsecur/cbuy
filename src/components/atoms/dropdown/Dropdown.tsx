"use client";
import React, { ChangeEvent, useEffect, useRef } from "react";
import styles from "./Dropdown.module.scss";

export interface OptionType {
  value: string;
  label: string;
}
export enum DropdownType {
  Primary = "primary",
  Secondary = "secondary",
}
export interface PropType {
  onChange?: (value: string) => void | undefined;
  value?: string | undefined;
  options: OptionType[];
  type?: DropdownType | "secondary" | "primary";
  style?: StyleType;
}

export interface StyleType {
  width?: string | number;
  height?: string | number;
  size?: string | number;
  color?: string;
  backgroundColor?: string;
}

export default function Dropdown({
  onChange,
  value,
  options,
  type,
  style,
}: PropType) {
  const selectRef = useRef<HTMLSelectElement>(null);

  const selectClassName =
    type === DropdownType.Secondary
      ? `${styles.selct} ${styles.secondary}`
      : `${styles.select} ${styles.primary}`;
  function handleChangeSelect(event: ChangeEvent<HTMLSelectElement>) {
    if (onChange) {
      onChange(event.target.value);
    }
  }

  const selectStyle = {
    ...style,
    width: style?.width ? style?.width : "339px",
  };
  useEffect(() => {
    if (selectRef.current) {
      selectRef.current.focus();
    }
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.icon}>
        <></>
      </span>
      <select
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
