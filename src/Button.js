import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children, className = '', ...others }) => {
  const classNames = clsx('rf-button', className);

  return (
    <button {...others} className={classNames}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { Button };
