import React, { Component } from 'react';
import axios from '../../axios/axios';
import classes from './Quiz.module.scss';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import Loader from '../../components/UI/Loader/Loader';

class Quiz extends Component {
  state = {
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [],
    loading: true,
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        `/quizes/${this.props.match.params.id}.json`
      );
      const quiz = response.data;

      this.setState({ quiz, loading: false });
    } catch (error) {
      console.log(error);
    }
  }

  onAnswerClickHandler = (answerId) => {
    const { quiz, activeQuestion, results } = this.state;
    const question = quiz[activeQuestion];
    const answer = question.rightAnswerId === answerId;

    if (answer) {
      if (!results[question.id]) {
        results[question.id] = 'success';
      }

      this.setState({
        answerState: { [answerId]: 'success' },
        results: results,
      });

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true,
          });
        } else {
          this.setState({
            activeQuestion: activeQuestion + 1,
            answerState: null,
          });
        }

        window.clearTimeout(timeout);
      }, 1000);
    } else {
      results[question.id] = 'error';

      this.setState({
        answerState: { [answerId]: 'error' },
        results: results,
      });
    }
  };

  isQuizFinished = () => {
    const { activeQuestion, quiz } = this.state;

    return activeQuestion + 1 === quiz.length;
  };

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {},
    });
  };

  render() {
    const {
      quiz,
      activeQuestion,
      answerState,
      isFinished,
      results,
      loading,
    } = this.state;

    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          {!isFinished && <h1>Answer all questions</h1>}

          {loading ? (
            <Loader />
          ) : isFinished ? (
            <FinishedQuiz
              results={results}
              quiz={quiz}
              onRetry={this.retryHandler}
            />
          ) : (
            <ActiveQuiz
              answers={quiz[activeQuestion].answers}
              question={quiz[activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              answerNumber={activeQuestion + 1}
              quizLength={quiz.length}
              answerState={answerState}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
