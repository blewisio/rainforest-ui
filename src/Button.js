import PropTypes from 'prop-types';
import React from 'react';
import { css, cx } from '@emotion/css';

const Button = ({ children, className = '', ...others }) => {
  const styles = css`
    background: #fff;
    border: 1px #222 solid;
    border-radius: 4px;
    cursor: pointer;
    padding: 16px 24px;
    font-size: 1.2rem;
    &:hover {
      background: #eee;
    }
  `;

  const classNames = cx(styles, className);

  return (
    <button {...others} className={classNames}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { Button };
