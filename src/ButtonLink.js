import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import './ButtonLink.css';

const ButtonLink = ({ children, href, className = '', ...others }) => {
  const classNames = clsx('rf-buttonLink', className);

  return (
    <a href={href} className={classNames} {...others}>
      {children}
    </a>
  );
};

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
};

export { ButtonLink };
