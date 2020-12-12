import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  // const [renderCount, setRenderCount] = useState(1);
  const [value, setValue] = useState('initial');
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef('');

  useEffect(() => {
    // setRenderCount((prev) => prev + 1);
    renderCount.current++;
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return (
    <div>
      <h1>Render counts: {renderCount.current}</h1>
      <h2>Prev value: {prevValue.current}</h2>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Render counts"
          onChange={(event) => setValue(event.target.value)}
          value={value}
          ref={inputRef}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => inputRef.current.focus()}
      >
        Focus
      </button>
    </div>
  );
};

export default App;
