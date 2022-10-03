import PropTypes from 'prop-types';
import React from 'react';
import { css, cx } from '@emotion/css';

const Alert = ({ children, className = '', ...others }) => {
  const styles = css`
    width: 100%;
    padding: 8px;
    border: 1px #222 solid;
  `;

  const classNames = cx(styles, className);

  return (
    <div className={classNames} {...others}>
      {children}
    </div>
  );
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { Alert };
