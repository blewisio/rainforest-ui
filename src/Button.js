import PropTypes from 'prop-types';
import React from 'react';
import { css, cx } from '@emotion/css';

const Button = ({ children, className = '', ...others }) => {
  const styles = css`
    padding: 12px 26px;
    background: rgb(42, 68, 146);
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 700;
    transition: background 0.1s ease-in;

    &:hover {
      background: rgb(29, 47, 101);
    }

    &:disabled {
      background: #555;
      cursor: not-allowed;
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
