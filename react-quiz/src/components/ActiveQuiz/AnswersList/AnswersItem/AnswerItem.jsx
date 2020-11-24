import React from 'react';
import classes from './AnswerItem.module.scss';

const AnswerItem = (props) => {
  const { answer, onAnswerClick } = props;
  return (
    <li
      className={classes.AnswersItem}
      onClick={() => onAnswerClick(answer.id)}
    >
      {answer.text}
    </li>
  );
};

export default AnswerItem;
