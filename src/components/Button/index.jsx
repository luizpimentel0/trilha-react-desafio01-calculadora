import React from 'react';
import styles from './Button.module.css';

const Button = ({ additionalClass, label, onClick }) => {
  return (
    <button
      className={`${styles.button} ${
        additionalClass ? styles?.[additionalClass] : ''
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
