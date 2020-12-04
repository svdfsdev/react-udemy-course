import React, { Component } from 'react';
import classes from './QuizCreater.module.scss';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import {
  createControl,
  validate,
  validateForm,
} from '../../formFramework/formFramework';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Select from '../../components/UI/Select/Select';

const createOptionControl = (number) => {
  return createControl(
    {
      id: number,
      label: `Option ${number}`,
      errorMessage: 'Answer can not be empty',
    },
    { required: true }
  );
};

const createFormInputs = () => {
  return {
    question: createControl(
      {
        label: 'Input question',
        errorMessage: 'Question can not be empty',
      },
      { required: true }
    ),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4),
  };
};

class QuizCreater extends Component {
  state = {
    quiz: [],
    isFormValid: false,
    rightAnswerId: 1,
    formInputs: createFormInputs(),
  };

  submitHandler = (event) => {
    event.preventDefault();
  };

  addQuestionHandler = async (event) => {
    event.preventDefault();

    const quiz = this.state.quiz.concat();
    const index = quiz.length + 1;

    const {
      question,
      option1,
      option2,
      option3,
      option4,
    } = this.state.formInputs;

    const questionItem = {
      id: index,
      question: question.value,
      rightAnswerId: this.state.rightAnswerId,
      answers: [
        { id: option1.id, text: option1.value },
        { id: option2.id, text: option2.value },
        { id: option3.id, text: option3.value },
        { id: option4.id, text: option4.value },
      ],
    };

    quiz.push(questionItem);

    await this.setState({
      quiz,
      isFormValid: false,
      rightAnswerId: 1,
      formInputs: createFormInputs(),
    });
  };

  createQuizHandler = (event) => {
    event.preventDefault();

    console.log(this.state.quiz);
  };

  changeHandler = (value, inputName) => {
    const formInputs = { ...this.state.formInputs };
    const input = { ...formInputs[inputName] };

    input.touched = true;
    input.value = value;

    input.valid = validate(input.value, input.validation);

    formInputs[inputName] = input;

    this.setState({
      formInputs,
      isFormValid: validateForm(formInputs),
    });
  };

  renderInputs = () => {
    return Object.keys(this.state.formInputs).map(
      (inputName, index) => {
        const input = this.state.formInputs[inputName];

        return (
          <Auxiliary key={inputName + index}>
            <Input
              label={input.label}
              value={input.value}
              valid={input.valid}
              shouldValidate={!!input.validation}
              touched={input.touched}
              errorMessage={input.errorMessage}
              onChange={(event) =>
                this.changeHandler(event.target.value, inputName)
              }
            />
            {!index && <hr />}
          </Auxiliary>
        );
      }
    );
  };

  selectChangeHandler = (event) => {
    this.setState({ rightAnswerId: +event.target.value });
  };

  render() {
    const select = (
      <Select
        label="Select right answer"
        value={this.state.rightAnswerId}
        onChange={this.selectChangeHandler}
        options={[
          { text: '1', value: 1 },
          { text: '2', value: 2 },
          { text: '3', value: 3 },
          { text: '4', value: 4 },
        ]}
      />
    );

    return (
      <div className={classes.QuizCreater}>
        <div>
          <h1>Create test</h1>
          <form onSubmit={this.submitHandler}>
            {this.renderInputs()}

            {select}

            <div>
              <Button
                type="primary"
                onClick={this.addQuestionHandler}
                disabled={!this.state.isFormValid}
              >
                Add question
              </Button>
              <Button
                type="success"
                onClick={this.createQuizHandler}
                disabled={!this.state.quiz.length}
              >
                Create test
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default QuizCreater;
