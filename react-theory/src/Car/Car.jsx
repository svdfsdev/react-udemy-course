import React from 'react';
import Radium from 'radium';
import './Car.css';

const Car = (props) => {
  const { name, year, onChangeName, removeCar } = props;
  const inputClasses = ['input'];

  const style = {
    border: '1px solid grey',
    boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14)',
    ':hover': {
      border: '1px solid #aaa',
      boxShadow: '0 4px 15px 0 rgba(0, 0, 0, 0.25)',
      cursor: 'pointer',
    },
  };

  if (props.name) {
    inputClasses.push('green');
  } else {
    inputClasses.push('red');
  }

  if (props.name.length > 4) {
    inputClasses.push('bold');
  }

  return (
    <div className="Car" style={style}>
      <p>
        Car name: <strong>{name}</strong>
      </p>
      <p>
        Year: <strong>{year}</strong>
      </p>
      <input
        type="text"
        className={inputClasses.join(' ')}
        value={name}
        onChange={onChangeName}
      />
      <button onClick={removeCar}>Remove car</button>
    </div>
  );
};

export default Radium(Car);
