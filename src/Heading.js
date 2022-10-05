import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useStyle } from './useStyle.js';

const cls = 'rf-heading';

const Heading = ({ children, className = '', level, ...others }) => {
  useStyle(cls, styles);
  const classNames = clsx(cls, className);

  switch (level) {
    case 1:
      return (
        <h1 className={classNames} {...others}>
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 className={classNames} {...others}>
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 className={classNames} {...others}>
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 className={classNames} {...others}>
          {children}
        </h4>
      );
    case 5:
      return (
        <h5 className={classNames} {...others}>
          {children}
        </h5>
      );
    case 6:
      return (
        <h6 className={classNames} {...others}>
          {children}
        </h6>
      );
    default:
      return (
        <div className={classNames} {...others}>
          {children}
        </div>
      );
  }
};

const styles = {
  letterSpacing: '0.025rem',
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  level: PropTypes.number.isRequired,
};

export { Heading };
