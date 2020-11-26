import React from 'react';
import classes from './AnswersList.module.scss';
import AnswerItem from './AnswersItem/AnswerItem';

const AnswersList = (props) => {
  const { onAnswerClick, answerState } = props;

  return (
    <ul className={classes.AnswersList}>
      {props.answers.map((answer, index) => {
        return (
          <AnswerItem
            answer={answer}
            key={index}
            onAnswerClick={onAnswerClick}
            answerState={answerState ? answerState[answer.id] : null}
          />
        );
      })}
    </ul>
  );
};

export default AnswersList;
