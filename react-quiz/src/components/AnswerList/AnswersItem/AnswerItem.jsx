import React from 'react';
import classes from './AnswerItem.module.scss';

const AnswerItem = (props) => {
  const { answer, onAnswerClick, answerState } = props;
  const cls = [classes.AnswerItem];

  if (answerState) {
    cls.push(classes[answerState]);
  }
  return (
    <li
      className={cls.join(' ')}
      onClick={() => onAnswerClick(answer.id)}
    >
      {answer.text}
    </li>
  );
};

export default AnswerItem;
