import React from 'react';

const withClass = (Component, className) => {
  return () => {
    return (
      <div className={className}>
        <Component />
      </div>
    );
  };
};

export default withClass;
