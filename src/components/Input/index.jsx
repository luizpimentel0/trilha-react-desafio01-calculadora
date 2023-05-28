import React from 'react';
import styles from './Input.module.css';

const Input = ({ value }) => {
  return (
    <input
      className={styles.input}
      disabled
      onChange={(e) => handleChange(e)}
      type="text"
      value={value}
    />
  );
};

export default Input;
