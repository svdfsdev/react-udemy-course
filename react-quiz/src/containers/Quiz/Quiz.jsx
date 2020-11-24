import React, { Component } from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import classes from './Quiz.module.scss';

class Quiz extends Component {
  state = {
    activeQuestion: 0,
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
    const { quiz, activeQuestion } = this.state;
    const question = quiz[activeQuestion];
    const answer = question.rightAnswerId === answerId;

    if (answer) {
      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          console.log('Finished');
        } else {
          this.setState({ activeQuestion: activeQuestion + 1 });
        }

        window.clearTimeout(timeout);
      }, 1000);
    }
  };

  isQuizFinished = () => {
    const { activeQuestion, quiz } = this.state;

    return activeQuestion + 1 === quiz.length;
  };

  render() {
    const { quiz, activeQuestion } = this.state;

    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Answer all questions</h1>
          <ActiveQuiz
            answers={quiz[activeQuestion].answers}
            question={quiz[activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            answerNumber={activeQuestion + 1}
            quizLength={quiz.length}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
