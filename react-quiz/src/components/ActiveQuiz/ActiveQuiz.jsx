import React from 'react';
import classes from './ActiveQuiz.module.scss';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = (props) => {
  const {
    question,
    answers,
    onAnswerClick,
    answerNumber,
    quizLength,
    answerState,
  } = props;

  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.Question}>
        <span>
          <strong>{`${answerNumber}.`}&nbsp;</strong>
          {question}
        </span>
        <small>{`${answerNumber} of ${quizLength}`}</small>
      </p>
      <AnswersList
        answers={answers}
        onAnswerClick={onAnswerClick}
        answerState={answerState}
      />
    </div>
  );
};

export default ActiveQuiz;
