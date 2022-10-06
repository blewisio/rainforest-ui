import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import './RadioButton.css';

const RadioButton = ({ className = '', ...others }) => {
  const classNames = clsx('rf-radioButton', className);

  return (
    <input type="radio" className={classNames} {...others} />
  );
};

RadioButton.propTypes = {
  className: PropTypes.string,
};

export { RadioButton };
