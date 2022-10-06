import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import './Badge.css';

const Badge = ({ children, className = '', ...others }) => {
  const classNames = clsx('rf-badge', className);

  return (
    <span className={classNames} {...others}>
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { Badge };
