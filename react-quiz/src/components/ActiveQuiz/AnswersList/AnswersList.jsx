import React from 'react';
import classes from './AnswersList.module.scss';
import AnswerItem from './AnswersItem/AnswerItem';

const AnswersList = (props) => {
  const { onAnswerClick } = props;

  return (
    <ul className={classes.AnswersList}>
      {props.answers.map((answer, index) => {
        return (
          <AnswerItem
            answer={answer}
            key={index}
            onAnswerClick={onAnswerClick}
          />
        );
      })}
    </ul>
  );
};

export default AnswersList;
