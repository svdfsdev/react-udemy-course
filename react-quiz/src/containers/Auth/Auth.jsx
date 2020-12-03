import React, { Component } from 'react';
import classes from './Auth.module.scss';
import Button from './../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

class Auth extends Component {
  state = {
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: 'Input correct email',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true,
        },
      },
      password: {
        value: '',
        type: 'password',
        label: 'Password',
        errorMessage: 'Input correct password',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6,
        },
      },
    },
  };

  loginHandler = () => {};

  registerHandler = () => {};

  submitHandler = (event) => {
    event.preventDefault();
  };

  validateControl = (value, validation) => {
    if (!validation) {
      return true;
    }

    let isValid = true;

    if (validation.required) {
      isValid = value.trim() && isValid;
    }

    if (validation.email) {
      const regExpEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      const validateEmail = regExpEmail.test(value.toLowerCase());

      isValid = validateEmail && isValid;
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid;
    }

    return isValid;
  };

  onChangeHandler = (event, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validateControl(
      control.value,
      control.validation
    );
    formControls[controlName] = control;

    this.setState({ formControls });
  };

  renderInputs = () => {
    const inputs = Object.keys(this.state.formControls).map(
      (controlName, index) => {
        const control = this.state.formControls[controlName];

        return (
          <Input
            key={controlName + index}
            type={control.type}
            value={control.value}
            valid={control.valid}
            touched={control.touched}
            label={control.label}
            shouldValidate={!!control.validation}
            errorMessage={control.errorMessage}
            onChange={(event) =>
              this.onChangeHandler(event, controlName)
            }
          />
        );
      }
    );

    return inputs;
  };

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Authorization</h1>

          <form
            onSubmit={this.submitHandler}
            className={classes.AuthForm}
          >
            {this.renderInputs()}
            <div>
              <Button type="success" onClick={this.loginHandler}>
                Login
              </Button>
              <Button type="primary" onClick={this.registerHandler}>
                register
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Auth;
