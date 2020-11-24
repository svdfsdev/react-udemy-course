import React from 'react';
import classes from './FinishedQuiz.module.scss';

const FinishedQuiz = (props) => {
  return (
    <div className={classes.FinishedQuiz}>
      <h1>Quiz was finished!</h1>
      <ul>
        <li>
          <strong>1. </strong>
          How are you?
          <i className={'fa fa-times ' + classes.error} />
        </li>

        <li>
          <strong>2. </strong>
          How are you?
          <i className={'fa fa-check ' + classes.success} />
        </li>
      </ul>

      <p>Correct is 4 of 10</p>
      <div>
        <button>Repeat</button>
      </div>
    </div>
  );
};

export default FinishedQuiz;
