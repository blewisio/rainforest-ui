import PropTypes from 'prop-types';
import React from 'react';
import { css, cx } from '@emotion/css';

const Checkbox = ({ className = '', ...others }) => {
  const styles = css``;
  const classNames = cx(styles, className);

  return (
    <input type="checkbox" className={classNames} {...others} />
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
};

export { Checkbox };
