import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useStyle } from './useStyle.js';

const cls = 'rf-textField';

const TextField = ({ className = '', ...others }) => {
  useStyle(cls, styles);
  const classNames = clsx(cls, className);

  return (
    <input type="text" className={classNames} {...others} />
  );
};

const styles = {
  padding: '10px',
};

TextField.propTypes = {
  className: PropTypes.string,
};

export { TextField };
