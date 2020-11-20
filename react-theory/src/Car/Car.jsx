import React from 'react';
import withClass from '../hoc/withClass';
import './Car.scss';

class Car extends React.Component {
  render() {
    const { name, year, onChangeName, removeCar } = this.props;
    const inputClasses = ['input'];

    if (this.props.name) {
      inputClasses.push('green');
    } else {
      inputClasses.push('red');
    }

    if (this.props.name.length > 4) {
      inputClasses.push('bold');
    }

    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default withClass(Car, 'Car');
