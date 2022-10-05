import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useStyle } from './useStyle.js';

const cls = 'rf-link';

const Link = ({ children, className = '', href, ...others }) => {
  useStyle(cls, styles);
  const classNames = clsx(cls, className);

  return (
    <a className={classNames} href={href} {...others}>
      {children}
    </a>
  );
};

const styles = {
  color: 'rgb(42, 68, 146)',
  transition: 'color 0.2s ease-out',
  '&:hover': {
    color: 'rgb(29, 47, 101)',
  },
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
};

export { Link };
