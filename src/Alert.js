import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import './Alert.css';

const Alert = ({ children, className = '', ...others }) => {
  const classNames = clsx('rf-alert', className);

  return (
    <div className={classNames} {...others}>
      {children}
    </div>
  );
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { Alert };
