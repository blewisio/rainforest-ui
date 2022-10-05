import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useStyle } from './useStyle.js';

const cls = 'rf-alert';

const Alert = ({ children, className = '', ...others }) => {
  useStyle(cls, styles);

  const classNames = clsx(cls, className);

  return (
    <div className={classNames} {...others}>
      {children}
    </div>
  );
};

const styles = {
  width: '100%',
  padding: '16px',
  border: '1px #222 solid',
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { Alert };
