import React, { useState, useEffect } from 'react';

const useLogger = (value) => {
  useEffect(() => {
    console.log('Value changed: ', value);
  }, [value]);
};

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    setValue(event.target.value);
  };

  const clear = () => setValue('');

  return { bind: { value, onChange }, clear };
};

const App = () => {
  // const [name, setName] = useState('');
  // const changeNameHandler = () => {
  //   setName((event) => event.target.value);
  // };

  const inputName = useInput('');
  const inputLastName = useInput('');

  useLogger(inputName.value);

  return (
    <div className="container pt-3">
      <h1>
        Person is {inputName.bind.value} {inputLastName.bind.value}
      </h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Input name"
          autoFocus={true}
          // value={inputName.value}
          // onChange={inputName.onChange}
          {...inputName.bind}
        />
      </div>
      <button
        onClick={inputName.clear}
        type="button"
        className="btn btn-primary"
      >
        CLEAR NAME
      </button>
      <hr />
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Input last name"
          {...inputLastName.bind}
        />
      </div>
      <button
        onClick={inputLastName.clear}
        type="button"
        className="btn btn-primary"
      >
        CLEAR LASTNAME
      </button>
    </div>
  );
};

export default App;
