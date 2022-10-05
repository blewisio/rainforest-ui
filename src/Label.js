import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useStyle } from './useStyle.js';

const cls = 'rf-label';

const Label = ({ children, className = '', ...others }) => {
  useStyle(cls, styles);
  const classNames = clsx(cls, className);

  return (
    <label className={classNames} {...others}>
      {children}
    </label>
  );
};

const styles = {};

Label.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { Label };
