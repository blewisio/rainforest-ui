import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ children, ...others }) => {
  return (
    <button {...others}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Button };
