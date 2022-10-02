import React from 'react';

const TextField = ({ ...others }) => {
  return (
    <input type="text" {...others} />
  );
};

TextField.propTypes = {};

export { TextField };
