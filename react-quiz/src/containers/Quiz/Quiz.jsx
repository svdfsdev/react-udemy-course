import React, { Component } from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/ActiveQuiz/FinishedQuiz/FinishedQuiz';
import classes from './Quiz.module.scss';

class Quiz extends Component {
  state = {
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

  onAnswerClickHandler = (answerId) => {
    const { quiz, activeQuestion, answerState } = this.state;
    const question = quiz[activeQuestion];
    const answer = question.rightAnswerId === answerId;

    if (answerState) {
      if (Object.values(answerState)[0] === 'success') {
        return;
      }
    }

    if (answer) {
      this.setState({
        answerState: { [answerId]: 'success' },
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
      this.setState({
        answerState: { [answerId]: 'error' },
      });
    }
  };

  isQuizFinished = () => {
    const { activeQuestion, quiz } = this.state;

    return activeQuestion + 1 === quiz.length;
  };

  render() {
    const {
      quiz,
      activeQuestion,
      answerState,
      isFinished,
    } = this.state;

    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          {!isFinished && <h1>Answer all questions</h1>}

          {isFinished ? (
            <FinishedQuiz />
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
