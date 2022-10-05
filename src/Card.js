import PropTypes from 'prop-types';
import React from 'react';
import { css, cx } from '@emotion/css';

const Card = ({ children, className = '', ...others }) => {
  const styles = css`
    padding: 20px;
    background: #fff;
    border: 1px #bbb solid;
    boxShadow: 0px 5px 12px #ddd;
  `;

  const classNames = cx(styles, className);

  return (
    <div {...others} className={classNames}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { Card };
