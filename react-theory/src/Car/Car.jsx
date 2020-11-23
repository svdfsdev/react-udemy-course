import React from 'react';
import PropTypes from 'prop-types';
import withClass from '../hoc/withClass';
import './Car.scss';

class Car extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.index === 0) {
      this.inputRef.current.focus();
    }
  }

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
          ref={this.inputRef}
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

Car.propTypes = {
  year: PropTypes.number,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  removeCar: PropTypes.func,
  onChangeName: PropTypes.func,
};

export default withClass(Car, 'Car');
