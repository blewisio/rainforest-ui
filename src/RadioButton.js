import PropTypes from 'prop-types';
import React from 'react';
import { css, cx } from '@emotion/css';

const RadioButton = ({ className = '', ...others }) => {
  const styles = css``;
  const classNames = cx(styles, className);

  return (
    <input type="radio" className={classNames} {...others} />
  );
};

RadioButton.propTypes = {
  className: PropTypes.string,
};

export { RadioButton };
