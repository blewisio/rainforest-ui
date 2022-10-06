import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import './Link.css';

const Link = ({ children, className = '', href, ...others }) => {
  const classNames = clsx('rf-link', className);

  return (
    <a className={classNames} href={href} {...others}>
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
};

export { Link };
