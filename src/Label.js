import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import './Label.css';

const Label = ({ children, className = '', ...others }) => {
  const classNames = clsx('rf-label', className);

  return (
    <label className={classNames} {...others}>
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { Label };
