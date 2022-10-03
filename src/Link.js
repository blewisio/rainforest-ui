import PropTypes from 'prop-types';
import React from 'react';
import { css, cx } from '@emotion/css';

const Link = ({ children, className = '', href, ...others }) => {
  const styles = css`
    color: rgb(42, 68, 146);
    transition: color 0.2s ease-out;

    &:hover {
      color: rgb(29, 47, 101);
    }
  `;

  const classNames = cx(styles, className);

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
