import PropTypes from 'prop-types';
import React from 'react';
import { css, cx } from '@emotion/css';

const Dropdown = ({ children, className = '', ...others }) => {
  const styles = css``;
  const classNames = cx(styles, className);

  return (
    <select className={classNames} {...others}>
      {children}
    </select>
  );
};

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { Dropdown };
