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
      passward: {
        value: '',
        type: 'passward',
        label: 'Passward',
        errorMessage: 'Input correct passward',
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

  onChangeHandler = (event, controlName) => {
    console.log(`${controlName}: `, event.target.value);
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
            shouldValidation={!!control.validation}
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
            <Button type="success" onClick={this.loginHandler}>
              Login
            </Button>
            <Button type="primary" onClick={this.registerHandler}>
              register
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Auth;
