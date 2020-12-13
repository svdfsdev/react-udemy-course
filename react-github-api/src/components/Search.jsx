import React, { useContext, useState, useRef } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { GithubContext } from '../context/github/githubContext';

export const Search = () => {
  const alert = useContext(AlertContext);
  const github = useContext(GithubContext);
  const [value, setValue] = useState('');

  const inputUserName = useRef();

  const inputChangeHandler = () => {
    setValue(() => inputUserName.current.value);
  };

  const onSubmit = (event) => {
    if (event.key !== 'Enter') {
      return;
    }

    github.clearUsers();

    const inputValue = inputUserName.current.value.trim();
    if (inputValue.trim()) {
      alert.hide();
      github.search(value.trim());
    } else {
      alert.show('Please, input usename', 'warning');
    }
  };

  return (
    <div className="form-group">
      <input
        value={value}
        ref={inputUserName}
        onChange={inputChangeHandler}
        onKeyPress={onSubmit}
        type="text"
        className="form-control"
        placeholder="Input username..."
      />
    </div>
  );
};
