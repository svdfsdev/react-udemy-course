import React, { Component } from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import classes from './Quiz.module.scss';

class Quiz extends Component {
  state = {
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        id: 1,
        question: 'What color is the sky?',
        rightAnswerId: 2,
        answers: [
          { id: 1, text: 'Black' },
          { id: 2, text: 'Blue' },
          { id: 3, text: 'Red' },
          { id: 4, text: 'Green' },
        ],
      },

      {
        id: 2,
        question: 'In what year was Saint Petersburg founded?',
        rightAnswerId: 3,
        answers: [
          { id: 1, text: '1700' },
          { id: 2, text: '1067' },
          { id: 3, text: '1703' },
          { id: 4, text: '1803' },
        ],
      },
    ],
  };

  componentDidMount() {
    console.log(`Quiz ID = ${this.props.match.params.id}`);
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
    } = this.state;

    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          {!isFinished && <h1>Answer all questions</h1>}

          {isFinished ? (
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
