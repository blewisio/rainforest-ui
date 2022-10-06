import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import './Checkbox.css';

const Checkbox = ({ className = '', ...others }) => {
  const classNames = clsx('rf-checkbox', className);

  return (
    <input type="checkbox" className={classNames} {...others} />
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
};

export { Checkbox };
