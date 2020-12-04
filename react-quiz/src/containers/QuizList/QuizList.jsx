import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './QuizList.module.scss';
import axios from '../../axios/axios';
import Loader from '../../components/UI/Loader/Loader';

class QuizList extends Component {
  state = { quizes: [], loading: true };

  async componentDidMount() {
    try {
      const response = await axios.get('/quizes.json');
      const quizes = [];

      Object.keys(response.data).forEach((key, index) => {
        quizes.push({ id: key, name: `Test №${index + 1}` });
      });

      this.setState({ quizes, loading: false });
    } catch (error) {
      console.log(error);
    }
  }

  renderQuizes() {
    return this.state.quizes.map((quiz) => {
      return (
        <li key={quiz.id}>
          <NavLink to={`/quiz/${quiz.id}`}>{quiz.name}</NavLink>
        </li>
      );
    });
  }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Tests list</h1>
          {this.state.loading ? (
            <Loader />
          ) : (
            <ul>{this.renderQuizes()}</ul>
          )}
        </div>
      </div>
    );
  }
}

export default QuizList;
