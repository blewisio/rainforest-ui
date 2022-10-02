import React from 'react';

const Button = ({ children, ...others }) => {
  return (
    <button {...others}>
      {children}
    </button>
  );
};

export { Button };
