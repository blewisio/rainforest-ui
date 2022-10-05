import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useStyle } from './useStyle.js';

const cls = 'rf-badge';

const Badge = ({ children, className = '', ...others }) => {
  useStyle(cls, styles);
  const classNames = clsx(cls, className);

  return (
    <span className={classNames} {...others}>
      {children}
    </span>
  );
};

const styles = {
  background: 'rgb(42, 68, 146)',
  color: '#fff',
  padding: '4px 6px',
  fontSize: '0.875rem',
  fontWeight: 'bold',
  letterSpacing: '0.025rem',
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { Badge };
