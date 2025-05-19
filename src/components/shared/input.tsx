import React from 'react';
import styles from "../../styles/input.module.scss";

interface TextFieldProps {
  type?: string; 
  placeholderText?: string;
}

const TextField: React.FC<TextFieldProps> = ({ type = "text", placeholderText = "" }) => {
  return <input type={type} placeholder={placeholderText} className={styles.input}/>;
};

export default TextField;
