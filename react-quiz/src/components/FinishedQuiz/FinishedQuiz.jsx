import React from 'react';
import Button from '../UI/Button/Button';
import classes from './FinishedQuiz.module.scss';

const FinishedQuiz = (props) => {
  const { quiz, results, onRetry } = props;
  const countSuccess = Object.keys(results).reduce((count, key) => {
    if (results[key] === 'success') {
      count++;
    }

    return count;
  }, 0);

  return (
    <div className={classes.FinishedQuiz}>
      <h1>Quiz was finished!</h1>

      <ul>
        {quiz.map((quizItem, index) => {
          const cls = [
            'fa',
            results[quizItem.id] === 'error'
              ? 'fa-times'
              : 'fa-check',
            classes[results[quizItem.id]],
          ];

          return (
            <li key={index}>
              <strong>{index + 1}</strong>.&nbsp;
              {quizItem.question}
              <i className={cls.join(' ')} />
            </li>
          );
        })}
      </ul>

      <p>
        Correct is {countSuccess} of {quiz.length}
      </p>
      <div>
        <Button onClick={onRetry} type="primary">
          Repeat
        </Button>
        <Button type="success">Go to the tests list</Button>
      </div>
    </div>
  );
};

export default FinishedQuiz;
