import PropTypes from 'prop-types';
import React from 'react';
import { css, cx } from '@emotion/css';

const Badge = ({ children, className = '', ...others }) => {
  const styles = css`
    background: rgb(42, 68, 146);
    color: #fff;
    padding: 4px 6px;
    font-size: 0.875rem;
    font-weight: bold;
    letter-spacing: 0.025rem;
  `;

  const classNames = cx(styles, className);

  return (
    <span className={classNames} {...others}>
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { Badge };
