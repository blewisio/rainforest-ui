import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import './TextField.css';

const TextField = ({ className = '', ...others }) => {
  const classNames = clsx('rf-textField', className);

  return (
    <input type="text" className={classNames} {...others} />
  );
};

TextField.propTypes = {
  className: PropTypes.string,
};

export { TextField };
