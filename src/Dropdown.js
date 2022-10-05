import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useStyle } from './useStyle.js';

const cls = 'rf-dropdown';

const Dropdown = ({ children, className = '', ...others }) => {
  useStyle(cls, styles);
  const classNames = clsx(cls, className);

  return (
    <select className={classNames} {...others}>
      {children}
    </select>
  );
};

const styles = {};

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { Dropdown };
