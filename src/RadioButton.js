import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useStyle } from './useStyle.js';

const cls = 'cf-radio';

const RadioButton = ({ className = '', ...others }) => {
  useStyle(cls, styles);
  const classNames = clsx(cls, className);

  return (
    <input type="radio" className={classNames} {...others} />
  );
};

const styles = {};

RadioButton.propTypes = {
  className: PropTypes.string,
};

export { RadioButton };
