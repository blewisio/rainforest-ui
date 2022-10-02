import React from 'react';

const TextField = ({ ...others }) => {
  return (
    <input type="text" {...others} />
  );
};

export { TextField };
