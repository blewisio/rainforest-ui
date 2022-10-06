import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import './Dropdown.css';

const Dropdown = ({ children, className = '', ...others }) => {
  const classNames = clsx('rf-dropdown', className);

  return (
    <select className={classNames} {...others}>
      {children}
    </select>
  );
};

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { Dropdown };
