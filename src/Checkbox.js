import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useStyle } from './useStyle.js';

const cls = 'rf-checkbox';

const Checkbox = ({ className = '', ...others }) => {
  useStyle(cls, styles);
  const classNames = clsx(cls, className);

  return (
    <input type="checkbox" className={classNames} {...others} />
  );
};

const styles = {};

Checkbox.propTypes = {
  className: PropTypes.string,
};

export { Checkbox };
