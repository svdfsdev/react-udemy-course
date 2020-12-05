import React from 'react';
import classes from './Input.module.scss';

const isInvalid = ({ valid, touched, shouldValidate }) => {
  return !valid && shouldValidate && touched;
};

const Input = (props) => {
  const { type, label, value, onChange, errorMessage } = props;

  const cls = [classes.Input];

  const inputType = type || 'text';
  const htmlFor = `${inputType}-${Math.random()}`;

  if (isInvalid(props)) {
    cls.push(classes.invalid);
  }

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={inputType}
        id={htmlFor}
        value={value}
        onChange={onChange}
      />
      {isInvalid(props) && <span>{errorMessage}</span>}
    </div>
  );
};

export default Input;
