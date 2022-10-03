import PropTypes from 'prop-types';
import React from 'react';
import { css, cx } from '@emotion/css';

const Label = ({ children, className = '', ...others }) => {
  const styles = css``;
  const classNames = cx(styles, className);

  return (
    <label className={classNames} {...others}>
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { Label };
