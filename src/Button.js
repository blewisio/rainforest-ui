import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useStyle } from './useStyle.js';

const cls = 'rf-button';

const Button = ({ children, className = '', ...others }) => {
  useStyle(cls, styles);
  const classNames = clsx(cls, className);

  return (
    <button {...others} className={classNames}>
      {children}
    </button>
  );
};

const styles = {
  padding: '12px 26px',
  background: 'rgb(42, 68, 146)',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '1.2rem',
  fontWeight: '700',
  transition: 'background-color 0.1s ease-in',
  '&:hover': {
    background: 'rgb(29, 47, 101)',
  },
  '&:disabled': {
    background: '#555',
    cursor: 'not-allowed',
  },
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { Button };
