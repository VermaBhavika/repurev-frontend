"use client";
import React from 'react';
import styles from "../../styles/input.module.scss";

interface TextFieldProps {
  type?: string;
  placeholderText?: string;
  len?: number;
  name?: string;
  onChange?: (name: string, value: string) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  type = "text",
  placeholderText = "",
  len = 30,
  name = "field",
  onChange,
}) => {
  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(name, e.target.value);
    }
  };

  return (
    <input
      type={type}
      placeholder={placeholderText}
      className={styles.input}
      maxLength={len}
      onChange={onChangeHandle}
      name={name}
    />
  );
};

export default TextField;
